// Called once from main.tsx — fires and forgets
export function pingBackend() {
    fetch('https://vitsion-website-backend.onrender.com/api/gallery', {
        method: 'HEAD',
        cache: 'no-store',
    }).catch(() => { }); // silently ignore errors
}
