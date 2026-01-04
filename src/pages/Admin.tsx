import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import MagicBento from "@/components/MagicBento";
import { X, Upload, Trash, ArrowLeft, Crop as CropIcon } from "lucide-react";
import Cropper from 'react-easy-crop';
import getCroppedImg from '../utils/cropImage';
import heic2any from 'heic2any';

const processFile = async (file: File): Promise<File> => {
    if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
        try {
            console.log("Converting HEIC file...");
            const convertedBlob = await heic2any({
                blob: file,
                toType: 'image/jpeg',
                quality: 0.8
            });
            const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
            console.log("Conversion successful");
            return new File([blob], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' });
        } catch (e) {
            console.error("HEIC conversion failed", e);
            return file;
        }
    }
    return file;
};

const Admin = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');

    // SECURITY: Ensure user came from the double-click entry
    useEffect(() => {
        const isUnlocked = sessionStorage.getItem('admin_access_unlocked');
        if (!isUnlocked) {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    // --- HOME STATE ---
    const [homeData, setHomeData] = useState({
        upcomingMovie: { images: [] as string[] },
        eventAnnouncement: {
            title: "",
            description: "",
            buttonText: "",
            buttonLink: "",
            backgroundImage: ""
        }
    });

    // --- EVENTS STATE ---
    const [events, setEvents] = useState<any[]>([]);
    const [editingEvent, setEditingEvent] = useState<any>(null);

    // --- FILMS STATE ---
    const [filmsData, setFilmsData] = useState<{ row1: any[]; row2: any[] }>({ row1: [], row2: [] });
    const [editingFilm, setEditingFilm] = useState<any>(null);
    const [editingFilmRow, setEditingFilmRow] = useState<string>('row1');

    // --- CONTACT STATE ---
    const [contactMessages, setContactMessages] = useState<any[]>([]);

    // --- GALLERY STATE ---
    const [galleryData, setGalleryData] = useState<any[]>([]);

    // --- CROPPER STATE ---
    const [cropModalOpen, setCropModalOpen] = useState(false);
    const [cropImageSrc, setCropImageSrc] = useState<string | null>(null);
    const [cropConfig, setCropConfig] = useState<{ field: string, index?: number } | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(1);

    // --- AUTH STATE ---
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // --- EFFECTS ---
    useEffect(() => {
        if (activeTab === 'home') {
            fetch('https://vitsion-website-backend.onrender.com/api/home')
                .then(res => res.json())
                .then(data => setHomeData(data))
                .catch(err => console.error("Error loading home:", err));
        } else if (activeTab === 'events') {
            fetch('https://vitsion-website-backend.onrender.com/api/events')
                .then(res => res.json())
                .then(data => setEvents(data))
                .catch(err => console.error("Error loading events:", err));
        } else if (activeTab === 'films') {
            fetch('https://vitsion-website-backend.onrender.com/api/films')
                .then(res => res.json())
                .then(data => setFilmsData(data))
                .catch(err => console.error("Error loading films:", err));
        } else if (activeTab === 'contact') {
            fetch('https://vitsion-website-backend.onrender.com/api/contact')
                .then(res => res.json())
                .then(data => setContactMessages(data))
                .catch(err => console.error("Error loading messages:", err));
        } else if (activeTab === 'gallery') {
            fetch('https://vitsion-website-backend.onrender.com/api/gallery')
                .then(res => res.json())
                .then(data => setGalleryData(data))
                .catch(err => console.error("Error loading gallery:", err));
        }
    }, [activeTab]);

    // --- HELPER FUNCTIONS ---
    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);
        const res = await fetch('https://vitsion-website-backend.onrender.com/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        return data.url;
    };

    const readFile = (file: File) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => resolve(reader.result), false);
            reader.readAsDataURL(file);
        });
    };

    const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    // --- HOME HANDLERS ---
    const handleHomeImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldPath: string) => {
        let file = e.target.files?.[0];
        if (!file) return;
        file = await processFile(file);
        try {
            const url = await uploadFile(file);
            if (fieldPath === 'eventAnnouncement.backgroundImage') {
                setHomeData(prev => ({ ...prev, eventAnnouncement: { ...prev.eventAnnouncement, backgroundImage: url } }));
            } else if (fieldPath === 'upcomingMovie.image1') {
                const newImages = [...homeData.upcomingMovie.images];
                newImages[0] = url;
                setHomeData(prev => ({ ...prev, upcomingMovie: { ...prev.upcomingMovie, images: newImages } }));
            } else if (fieldPath === 'upcomingMovie.image2') {
                const newImages = [...homeData.upcomingMovie.images];
                newImages[1] = url;
                setHomeData(prev => ({ ...prev, upcomingMovie: { ...prev.upcomingMovie, images: newImages } }));
            }
        } catch (err) { console.error(err); alert("Upload failed"); }
    };

    const handleHomeSave = async () => {
        await fetch('https://vitsion-website-backend.onrender.com/api/home', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(homeData)
        });
        alert("Home saved!");
    };

    // --- EVENTS HANDLERS & CROP ---
    const handleEventImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
        if (e.target.files && e.target.files.length > 0) {
            let file = e.target.files[0];
            file = await processFile(file);
            const imageDataUrl = await readFile(file);
            setCropImageSrc(imageDataUrl as string);
            setCropConfig({ field, index });

            // Set Aspect Ratio based on field
            if (field === 'poster') {
                setAspectRatio(2 / 3);
            } else if (field === 'gallery' && index === 0) {
                setAspectRatio(9 / 16); // Image 1 (Right Poster)
            } else if (field === 'gallery' && index === 1) {
                setAspectRatio(16 / 9); // Image 2 (Below Poster)
            } else if (field === 'gallery' && index === 2) {
                setAspectRatio(1);    // Image 3 (Bottom Right)
            } else {
                setAspectRatio(1);
            }

            setZoom(1);
            setCrop({ x: 0, y: 0 });
            setCropModalOpen(true);
            e.target.value = ''; // Reset input
        }
    };

    const handleReCrop = (imageUrl: string, field: string, index?: number) => {
        setCropImageSrc(imageUrl);
        setCropConfig({ field, index });

        // Set Aspect Ratio based on field
        if (field === 'poster' || field === 'film_poster') {
            setAspectRatio(2 / 3);
        } else if (field === 'gallery' && index === 0) {
            setAspectRatio(9 / 16); // Image 1 (Right Poster)
        } else if (field === 'gallery' && index === 1) {
            setAspectRatio(16 / 9); // Image 2 (Below Poster)
        } else if (field === 'gallery' && index === 2) {
            setAspectRatio(1);    // Image 3 (Bottom Right)
        } else {
            setAspectRatio(1);
        }

        setZoom(1);
        setCrop({ x: 0, y: 0 });
        setCropModalOpen(true);
    };

    const handleCropSave = async () => {
        if (!cropImageSrc || !croppedAreaPixels || !cropConfig) return;

        try {
            const croppedImageBlob = await getCroppedImg(cropImageSrc, croppedAreaPixels);
            if (!croppedImageBlob) return;

            const file = new File([croppedImageBlob], "cropped_image.jpg", { type: "image/jpeg" });
            const url = await uploadFile(file);

            if (cropConfig.field === 'poster') {
                setEditingEvent((prev: any) => ({ ...prev, poster: url }));
            } else if (cropConfig.field === 'film_poster') {
                setEditingFilm((prev: any) => ({ ...prev, poster: url }));
            } else if (cropConfig.field === 'gallery' && typeof cropConfig.index === 'number') {
                setEditingEvent((prev: any) => {
                    const newGallery = [...(prev.galleryImages || ['', '', ''])];
                    newGallery[cropConfig.index!] = url;
                    return { ...prev, galleryImages: newGallery };
                });
            }

            setCropModalOpen(false);
            setCropImageSrc(null);
        } catch (e) {
            console.error(e);
            alert("Error cropping image");
        }
    };

    const handleEventSave = async () => {
        if (!editingEvent) return;
        let updatedEvents;
        if (editingEvent.id && events.find(e => e.id === editingEvent.id)) {
            updatedEvents = events.map(e => e.id === editingEvent.id ? editingEvent : e);
        } else {
            const newId = (Math.max(...events.map(e => parseInt(e.id) || 0), 0) + 1).toString();
            updatedEvents = [...events, { ...editingEvent, id: newId }];
        }
        setEvents(updatedEvents);
        setEditingEvent(null);
        await fetch('https://vitsion-website-backend.onrender.com/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedEvents)
        });
    };

    // --- FILMS HANDLERS ---
    const handleFilmImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        if (e.target.files && e.target.files.length > 0) {
            let file = e.target.files[0];
            file = await processFile(file);
            const imageDataUrl = await readFile(file);
            setCropImageSrc(imageDataUrl as string);
            setCropConfig({ field: 'film_poster', index: undefined }); // Use specific field for film
            setAspectRatio(2 / 3); // Standard for posters
            setZoom(1);
            setCrop({ x: 0, y: 0 });
            setCropModalOpen(true);
            e.target.value = '';
        }
    };

    const handleFilmSave = async () => {
        if (!editingFilm) return;

        const newFilmsData = { ...filmsData };
        // Determine which row the film belongs to. Note: Logic to move between rows is implied if editingFilmRow changes.
        // We need to remove the film from its OLD location first if we are moving it, or simply replacing it.
        // Since we don't track 'originalRow', we'll search both rows for the 'originalTitle' and remove it, then add the new one.

        const originalTitle = editingFilm.originalTitle || editingFilm.title;

        // Remove existing film with this title from ANY row (to handle row changes or updates)
        newFilmsData.row1 = newFilmsData.row1.filter(f => f.title !== originalTitle);
        newFilmsData.row2 = newFilmsData.row2.filter(f => f.title !== originalTitle);

        // Add the updated film to the selected row
        const targetRow = editingFilmRow === 'row1' ? 'row1' : 'row2';
        // Clean up the temporary 'originalTitle' property before saving
        const filmToSave = { ...editingFilm };
        delete filmToSave.originalTitle;

        newFilmsData[targetRow].push(filmToSave);

        setFilmsData(newFilmsData);
        setEditingFilm(null);

        await fetch('https://vitsion-website-backend.onrender.com/api/films', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFilmsData)
        });
    };

    const handleFilmDelete = async (film: any, rowName: 'row1' | 'row2') => {
        if (!window.confirm("Delete film?")) return;
        const newFilmsData = { ...filmsData };
        newFilmsData[rowName] = newFilmsData[rowName].filter(f => f.title !== film.title);
        setFilmsData(newFilmsData);
        await fetch('https://vitsion-website-backend.onrender.com/api/films', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFilmsData)
        });
    };

    // --- CONTACT HANDLERS ---
    const handleDeleteMessage = async (id: number) => {
        if (!window.confirm("Delete this message?")) return;
        try {
            const res = await fetch(`https://vitsion-website-backend.onrender.com/api/contact/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setContactMessages(prev => prev.filter(msg => msg.id !== id));
            } else {
                alert("Failed to delete message");
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting message");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername("");
        setPassword("");
        sessionStorage.removeItem('admin_access_unlocked');
        navigate('/');
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('https://vitsion-website-backend.onrender.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (data.success) {
                setIsAuthenticated(true);
            } else {
                alert("Incorrect Username or Password");
            }
        } catch (err) {
            console.error(err);
            alert("Login error");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <form onSubmit={handleLogin} className="bg-[#111] p-8 rounded-2xl border border-white/10 w-full max-w-sm space-y-6">
                    <h1 className="text-2xl font-bold text-center text-[#d1ab2e]">Admin Access</h1>
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-[#d1ab2e] outline-none transition-colors"
                            placeholder="Username"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-[#d1ab2e] outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-[#d1ab2e] text-black hover:bg-[#e2bd44] font-bold py-6">
                        LOGIN
                    </Button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24 relative">
            {/* CROP MODAL */}
            {cropModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-8">
                    <div className="relative w-full max-w-4xl h-[60vh] bg-[#222] border border-white/10 rounded-lg overflow-hidden mb-6">
                        <Cropper
                            image={cropImageSrc || undefined}
                            crop={crop}
                            zoom={zoom}
                            aspect={aspectRatio}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                    <div className="flex flex-col items-center w-full max-w-md gap-6">
                        <div className="w-full flex items-center gap-4">
                            <span className="text-sm">Zoom</span>
                            <input
                                type="range"
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                onChange={(e) => setZoom(Number(e.target.value))}
                                className="w-full accent-[#d1ab2e]"
                            />
                        </div>
                        <div className="flex gap-4 w-full">
                            <Button onClick={handleCropSave} className="flex-1 bg-[#d1ab2e] text-black font-bold h-12">
                                CROP & SAVE
                            </Button>
                            <Button onClick={() => setCropModalOpen(false)} variant="ghost" className="flex-1 border border-white/20 h-12">
                                CANCEL
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Back/Logout Button */}
            <button
                onClick={handleLogout}
                className="fixed top-8 left-8 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors z-[50]"
            >
                <ArrowLeft size={20} />
                <span>Logout</span>
            </button>
            <h1 className="text-4xl font-bold mb-8 text-center uppercase tracking-widest text-[#d1ab2e]">Admin Dashboard</h1>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-12">
                {['home', 'events', 'films', 'gallery', 'contact'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full uppercase font-bold tracking-wider transition-all duration-300 ${activeTab === tab ? 'bg-white text-black' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto bg-[#111] p-8 rounded-2xl border border-white/10">
                {/* --- HOME TAB --- */}
                {activeTab === 'home' && (
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <h2 className="text-2xl font-bold">Upcoming Events Section</h2>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-300">Images (Carousel)</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {homeData.upcomingMovie.images?.map((img, index) => (
                                        <div key={index} className="relative group aspect-[2/3] bg-black/50 rounded-lg overflow-hidden border border-white/10">
                                            <img
                                                src={img}
                                                alt="Upcoming"
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = "https://via.placeholder.com/400x600?text=Image+Error";
                                                }}
                                            />
                                            <button
                                                onClick={() => {
                                                    const newImages = homeData.upcomingMovie.images.filter((_, i) => i !== index);
                                                    const newData = { ...homeData, upcomingMovie: { ...homeData.upcomingMovie, images: newImages } };
                                                    setHomeData(newData);
                                                    fetch('https://vitsion-website-backend.onrender.com/api/home', {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify(newData)
                                                    });
                                                }}
                                                className="absolute top-2 right-2 p-2 bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}

                                    {/* Upload New Button */}
                                    <div className="aspect-[2/3] bg-white/5 border-2 border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors relative cursor-pointer group">
                                        <div className="p-4 bg-white/10 rounded-full group-hover:bg-[#d1ab2e] group-hover:text-black transition-colors">
                                            <Upload size={24} />
                                        </div>
                                        <span className="text-sm font-bold text-gray-400 group-hover:text-white">ADD IMAGE</span>
                                        <input
                                            type="file"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            onChange={async (e) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    let file = e.target.files[0];
                                                    file = await processFile(file);
                                                    const formData = new FormData();
                                                    formData.append('image', file);
                                                    fetch('https://vitsion-website-backend.onrender.com/api/upload', { method: 'POST', body: formData })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            const currentImages = homeData.upcomingMovie.images || [];
                                                            const newData = {
                                                                ...homeData,
                                                                upcomingMovie: {
                                                                    ...homeData.upcomingMovie,
                                                                    images: [...currentImages, data.url]
                                                                }
                                                            };
                                                            setHomeData(newData);
                                                            fetch('https://vitsion-website-backend.onrender.com/api/home', {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify(newData)
                                                            });
                                                        });
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Event Announcement</h2>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input value={homeData.eventAnnouncement.title} onChange={(e) => setHomeData(prev => ({ ...prev, eventAnnouncement: { ...prev.eventAnnouncement, title: e.target.value } }))} placeholder="Title" className="input-field" />
                                <input value={homeData.eventAnnouncement.buttonText} onChange={(e) => setHomeData(prev => ({ ...prev, eventAnnouncement: { ...prev.eventAnnouncement, buttonText: e.target.value } }))} placeholder="Button Text" className="input-field" />
                            </div>
                            <textarea value={homeData.eventAnnouncement.description} onChange={(e) => setHomeData(prev => ({ ...prev, eventAnnouncement: { ...prev.eventAnnouncement, description: e.target.value } }))} placeholder="Description" className="input-field h-24 mb-4" />
                            <div>
                                <label className="block text-gray-400 mb-2">Background Image</label>
                                {homeData.eventAnnouncement.backgroundImage && <img src={homeData.eventAnnouncement.backgroundImage} className="w-full h-48 object-cover rounded-lg border border-white/20 mb-2" />}
                                <input type="file" onChange={(e) => handleHomeImageUpload(e, 'eventAnnouncement.backgroundImage')} className="file-input" />
                            </div>
                        </div>
                        <Button onClick={handleHomeSave} className="save-btn">SAVE HOME CHANGES</Button>
                    </div>
                )}

                {/* --- EVENTS TAB --- */}
                {activeTab === 'events' && (
                    <div className="space-y-8">
                        {!editingEvent ? (
                            <>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold">Manage Events</h2>
                                    <Button onClick={() => setEditingEvent({ id: '', title: '', description: '', longDescription: '', poster: '', color: '#000000', galleryImages: ['', '', ''] })} className="bg-[#d1ab2e] text-black">ADD NEW EVENT</Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                                    {events.map(event => (
                                        <div key={event.id} className="relative group bg-[#111] rounded-xl overflow-hidden border border-white/10 hover:border-[#d1ab2e] transition-all duration-300">
                                            {/* Poster Aspect Ratio Container */}
                                            <div className="aspect-[2/3] w-full relative">
                                                <img
                                                    src={event.poster}
                                                    alt={event.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                                {/* Text Content */}
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">{event.title}</h3>
                                                    <p className="text-xs text-gray-400 line-clamp-2">{event.description}</p>
                                                </div>
                                            </div>

                                            {/* Overlay Controls */}
                                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-20 backdrop-blur-sm">
                                                <h3 className="text-xl font-bold text-[#d1ab2e] mb-2 text-center px-4">{event.title}</h3>
                                                <div className="flex gap-2">
                                                    <Button onClick={() => setEditingEvent(event)} className="bg-white text-black hover:bg-[#d1ab2e] hover:text-white font-bold px-6 tracking-wider">EDIT</Button>
                                                    <Button onClick={() => {
                                                        if (window.confirm("Delete?")) {
                                                            const updated = events.filter(e => e.id !== event.id);
                                                            setEvents(updated);
                                                            fetch('https://vitsion-website-backend.onrender.com/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updated) });
                                                        }
                                                    }} variant="destructive" className="font-bold px-6 tracking-wider">DELETE</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="bg-[#222] p-6 rounded-2xl border border-white/10">
                                <h2 className="text-xl font-bold mb-6">Edit Event</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Event Title</label>
                                        <input value={editingEvent.title} onChange={e => setEditingEvent({ ...editingEvent, title: e.target.value })} placeholder="Title" className="input-field" />
                                    </div>

                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Theme Color</label>
                                        <input type="color" value={editingEvent.color} onChange={e => setEditingEvent({ ...editingEvent, color: e.target.value })} className="h-10 w-full cursor-pointer rounded border border-white/20" />
                                    </div>

                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Event Tag (Card Summary)</label>
                                        <textarea value={editingEvent.description} onChange={e => setEditingEvent({ ...editingEvent, description: e.target.value })} placeholder="Short summary for the event card..." className="input-field h-20" />
                                    </div>

                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Event Description (Bento/About)</label>
                                        <textarea value={editingEvent.longDescription || ''} onChange={e => setEditingEvent({ ...editingEvent, longDescription: e.target.value })} placeholder="Full event details for the About section..." className="input-field h-32" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-gray-400 text-sm">Event Date</label>
                                            <input type="date" value={editingEvent.date || ''} onChange={e => setEditingEvent({ ...editingEvent, date: e.target.value })} className="input-field" />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm">Total Participants</label>
                                            <input type="number" value={editingEvent.participants || ''} onChange={e => setEditingEvent({ ...editingEvent, participants: e.target.value })} className="input-field" placeholder="0" />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm">Row Assignment</label>
                                            <select
                                                value={editingEvent.row || '1'}
                                                onChange={e => setEditingEvent({ ...editingEvent, row: e.target.value })}
                                                className="input-field"
                                            >
                                                <option value="1">Row 1 (Top)</option>
                                                <option value="2">Row 2 (Bottom)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-gray-400">Poster</label>
                                        <input type="file" onChange={(e) => handleEventImageUpload(e, 'poster')} className="file-input mt-2" />
                                        {editingEvent.poster && (
                                            <div className="mt-2 relative inline-block group">
                                                <img src={editingEvent.poster} className="h-32 rounded border border-white/20" />
                                                <button
                                                    onClick={() => handleReCrop(editingEvent.poster, 'poster')}
                                                    className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-[#d1ab2e] text-white hover:text-black rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                                    title="Re-crop Image"
                                                >
                                                    <CropIcon size={16} />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-gray-400">Gallery Images (3)</label>
                                        <div className="grid grid-cols-3 gap-2 mt-2">
                                            <div>
                                                <label className="text-xs font-bold text-[#d1ab2e] mb-1 block">Image 1 (Right Poster)</label>
                                                <input type="file" onChange={(e) => handleEventImageUpload(e, 'gallery', 0)} className="text-xs text-gray-400 mb-2" />
                                                <div className="aspect-[9/16] bg-black/50 overflow-hidden rounded border border-white/10 relative group">
                                                    {editingEvent.galleryImages?.[0] && (
                                                        <>
                                                            <img src={editingEvent.galleryImages[0]} className="w-full h-full object-cover" />
                                                            <button
                                                                onClick={() => handleReCrop(editingEvent.galleryImages[0], 'gallery', 0)}
                                                                className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-[#d1ab2e] text-white hover:text-black rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                                                title="Re-crop Image"
                                                            >
                                                                <CropIcon size={14} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-[#d1ab2e] mb-1 block">Image 2 (Below Poster)</label>
                                                <input type="file" onChange={(e) => handleEventImageUpload(e, 'gallery', 1)} className="text-xs text-gray-400 mb-2" />
                                                <div className="aspect-video bg-black/50 overflow-hidden rounded border border-white/10 relative group">
                                                    {editingEvent.galleryImages?.[1] && (
                                                        <>
                                                            <img src={editingEvent.galleryImages[1]} className="w-full h-full object-cover" />
                                                            <button
                                                                onClick={() => handleReCrop(editingEvent.galleryImages[1], 'gallery', 1)}
                                                                className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-[#d1ab2e] text-white hover:text-black rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                                                title="Re-crop Image"
                                                            >
                                                                <CropIcon size={14} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-[#d1ab2e] mb-1 block">Image 3 (Bottom Right)</label>
                                                <input type="file" onChange={(e) => handleEventImageUpload(e, 'gallery', 2)} className="text-xs text-gray-400 mb-2" />
                                                <div className="aspect-square bg-black/50 overflow-hidden rounded border border-white/10 relative group">
                                                    {editingEvent.galleryImages?.[2] && (
                                                        <>
                                                            <img src={editingEvent.galleryImages[2]} className="w-full h-full object-cover" />
                                                            <button
                                                                onClick={() => handleReCrop(editingEvent.galleryImages[2], 'gallery', 2)}
                                                                className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-[#d1ab2e] text-white hover:text-black rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                                                title="Re-crop Image"
                                                            >
                                                                <CropIcon size={14} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button onClick={handleEventSave} className="save-btn flex-1">SAVE</Button>
                                        <Button onClick={() => setEditingEvent(null)} variant="ghost">CANCEL</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* --- FILMS TAB --- */}
                {activeTab === 'films' && (
                    <div className="space-y-12">
                        {!editingFilm ? (
                            <>
                                <div className="flex justify-between items-center bg-[#222] p-4 rounded-xl border border-white/10 mb-8 sticky top-0 z-10 shadow-xl">
                                    <h2 className="text-2xl font-bold">Manage Films</h2>
                                    <Button onClick={() => { setEditingFilm({ title: '', desc: '', poster: '', director: '', link: '' }); setEditingFilmRow('row1'); }} className="bg-[#d1ab2e] text-black">ADD FILM</Button>
                                </div>

                                {['row1', 'row2'].map((row) => (
                                    <div key={row} className="space-y-6">
                                        <h3 className="text-xl font-bold uppercase text-gray-400 border-b border-white/10 pb-2">
                                            {row === 'row1' ? 'Now Showing (Row 1)' : 'Upcoming (Row 2)'}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {filmsData[row as 'row1' | 'row2'].map((film, i) => (
                                                <div key={i} className="group relative bg-[#111] rounded-xl overflow-hidden border border-white/10 hover:border-[#d1ab2e] transition-all">
                                                    <div className="aspect-[2/3] w-full relative">
                                                        <img src={film.poster} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                                            <Button onClick={() => { setEditingFilm({ ...film, originalTitle: film.title }); setEditingFilmRow(row); }} className="bg-white text-black hover:bg-[#d1ab2e]">EDIT</Button>
                                                            <Button onClick={() => handleFilmDelete(film, row as 'row1' | 'row2')} variant="destructive">DELETE</Button>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <h4 className="font-bold truncate" title={film.title}>{film.title}</h4>
                                                        <p className="text-xs text-gray-400 truncate">{film.director || 'Unknown Director'}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
                                <div className="bg-[#111] p-8 rounded-2xl w-full max-w-2xl border border-white/20 max-h-[90vh] overflow-y-auto relative">
                                    <button onClick={() => setEditingFilm(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X /></button>
                                    <h2 className="text-3xl font-bold mb-8 text-[#d1ab2e] border-b border-white/10 pb-4">
                                        {editingFilm.originalTitle ? 'Edit Film' : 'New Film'}
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-gray-400 text-sm mb-1 block">Title</label>
                                                <input value={editingFilm.title} onChange={e => setEditingFilm({ ...editingFilm, title: e.target.value })} className="input-field" />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-sm mb-1 block">Director</label>
                                                <input value={editingFilm.director} onChange={e => setEditingFilm({ ...editingFilm, director: e.target.value })} className="input-field" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-gray-400 text-sm mb-1 block">Description</label>
                                            <textarea value={editingFilm.desc} onChange={e => setEditingFilm({ ...editingFilm, desc: e.target.value })} className="input-field h-32" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-gray-400 text-sm mb-1 block">YouTube Link</label>
                                                <input value={editingFilm.link} onChange={e => setEditingFilm({ ...editingFilm, link: e.target.value })} className="input-field" />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-sm mb-1 block">Row Assignment</label>
                                                <select value={editingFilmRow} onChange={e => setEditingFilmRow(e.target.value)} className="input-field">
                                                    <option value="row1">Now Showing (Row 1)</option>
                                                    <option value="row2">Upcoming (Row 2)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-gray-400 text-sm mb-2 block">Poster Image</label>
                                            <div className="flex gap-4 items-start">
                                                {editingFilm.poster ? (
                                                    <div className="relative group w-32 aspect-[2/3] rounded overflow-hidden border border-white/10">
                                                        <img src={editingFilm.poster} className="w-full h-full object-cover" />
                                                        <button
                                                            onClick={() => handleReCrop(editingFilm.poster, 'film_poster')}
                                                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white"
                                                        >
                                                            <CropIcon />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="w-32 aspect-[2/3] bg-white/5 rounded flex items-center justify-center border border-white/10 text-gray-500 text-xs text-center p-2">
                                                        No Image
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <input type="file" onChange={(e) => handleFilmImageUpload(e, 'poster')} className="file-input" />
                                                    <p className="text-xs text-gray-500 mt-2">Recommended: Portrait aspect ratio (2:3). Click crop icon on image to adjust.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-6 border-t border-white/10">
                                            <Button onClick={handleFilmSave} className="bg-[#d1ab2e] text-black hover:bg-white font-bold flex-1 py-6">SAVE CHANGES</Button>
                                            <Button onClick={() => setEditingFilm(null)} variant="ghost" className="flex-1 py-6">CANCEL</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* --- CONTACT TAB --- */}
                {activeTab === 'contact' && (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <h2 className="text-2xl font-bold">Inquiries / Messages</h2>
                        </div>
                        <div className="overflow-auto bg-[#222] rounded-lg border border-white/10">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-black/50 text-xs uppercase text-gray-400 font-bold sticky top-0">
                                    <tr>
                                        <th className="p-4 border-b border-white/10">Date</th>
                                        <th className="p-4 border-b border-white/10">Name</th>
                                        <th className="p-4 border-b border-white/10">Email</th>
                                        <th className="p-4 border-b border-white/10">Message</th>
                                        <th className="p-4 border-b border-white/10 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-300 divide-y divide-white/5">
                                    {contactMessages && contactMessages.length > 0 ? (
                                        contactMessages.map((msg: any, idx: number) => (
                                            <tr key={idx} className="hover:bg-white/5 transition-colors">
                                                <td className="p-4 whitespace-nowrap text-gray-500">
                                                    {msg.date ? new Date(msg.date).toLocaleDateString() : '-'}
                                                </td>
                                                <td className="p-4 font-medium text-white">{msg.name}</td>
                                                <td className="p-4">{msg.email}</td>
                                                <td className="p-4 max-w-xs truncate" title={msg.message}>
                                                    {msg.message}
                                                </td>
                                                <td className="p-4 text-right">
                                                    <button
                                                        onClick={() => handleDeleteMessage(msg.id)}
                                                        className="p-2 bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white rounded transition-colors"
                                                        title="Delete message"
                                                    >
                                                        <Trash size={16} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="p-8 text-center text-gray-500">
                                                No messages found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* --- GALLERY TAB --- */}
                {activeTab === 'gallery' && (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <h2 className="text-2xl font-bold">Gallery Images</h2>
                            <div className="relative">
                                <input
                                    type="file"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={async (e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            const formData = new FormData();
                                            formData.append('image', e.target.files[0]);
                                            const res = await fetch('https://vitsion-website-backend.onrender.com/api/upload', { method: 'POST', body: formData });
                                            const data = await res.json();
                                            const newImage = { img: data.url, height: 900 };
                                            const updatedGallery = [...galleryData, newImage];
                                            setGalleryData(updatedGallery);
                                            await fetch('https://vitsion-website-backend.onrender.com/api/gallery', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify(updatedGallery)
                                            });
                                        }
                                    }}
                                />
                                <Button className="bg-[#d1ab2e] text-black hover:bg-[#e2bd44]">
                                    <Upload size={16} className="mr-2" />
                                    ADD IMAGE
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {galleryData.map((item, index) => (
                                <div key={index} className="relative group aspect-square bg-black/50 rounded-lg overflow-hidden border border-white/10">
                                    <img src={item.img} alt="Gallery" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                                        <input
                                            type="number"
                                            value={item.height}
                                            onChange={(e) => {
                                                const updated = [...galleryData];
                                                updated[index].height = parseInt(e.target.value);
                                                setGalleryData(updated);
                                            }}
                                            className="w-24 bg-black/50 border border-white/20 rounded p-1 text-white text-sm text-center"
                                            placeholder="Height"
                                        />
                                        <button
                                            onClick={async () => {
                                                if (window.confirm("Delete this image?")) {
                                                    const updated = galleryData.filter((_, i) => i !== index);
                                                    setGalleryData(updated);
                                                    await fetch('https://vitsion-website-backend.onrender.com/api/gallery', {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify(updated)
                                                    });
                                                }
                                            }}
                                            className="p-2 bg-red-600 rounded text-white hover:bg-red-700 transition-colors"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button
                            onClick={async () => {
                                await fetch('https://vitsion-website-backend.onrender.com/api/gallery', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(galleryData)
                                });
                                alert("Gallery saved!");
                            }}
                            className="save-btn"
                        >
                            SAVE GALLERY CHANGES
                        </Button>
                    </div>
                )}
            </div>

            <style>{`
                .input-field {
                    width: 100%;
                    background: rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 0.5rem;
                    padding: 0.75rem;
                    color: white;
                    outline: none;
                    }
                .input-field:focus {
                    border-color: #d1ab2e;
                }
                .file-input {
                    display: block;
                    width: 100%;
                    font-size: 0.875rem;
                    color: #9ca3af;
                }
                .file-input::file-selector-button {
                    margin-right: 1rem;
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    border: 0;
                    font-size: 0.875rem;
                    font-weight: 600;
                    background-color: #d1ab2e;
                    color: black;
                    cursor: pointer;
                    }
                .file-input::file-selector-button:hover {
                    background-color: #e2bd44;
                }
                .save-btn {
                    width: 100%;
                    padding: 1.5rem;
                    font-size: 1.125rem;
                    font-weight: bold;
                    background-color: #d1ab2e;
                    color: black;
                }
                .save-btn:hover {
                    background-color: #e2bd44;
                }
            `}</style>
        </div >
    );
};

export default Admin;
