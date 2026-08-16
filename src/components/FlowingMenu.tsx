// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './FlowingMenu.css';

const demoItems = [
    { link: '#', text: 'Workshops', image: '/Events/Shortfilm.webp' },
    { link: '#', text: 'Screenings', image: '/Events/MeesayaMurukku.webp' },
    { link: '#', text: 'Festivals', image: '/Events/Retrograde.webp' },
    { link: '#', text: 'Talks', image: '/Events/Shortfilm.webp' },
    { link: '#', text: 'Collabs', image: '/Events/MeesayaMurukku.webp' }
];

function FlowingMenu({ items = demoItems }) {
    return (
        <div className="flowing-menu-container h-48 w-full relative z-20">
            <div className="menu-wrap">
                <nav className="menu">
                    {items.map((item, idx) => (
                        <MenuItem key={idx} {...item} />
                    ))}
                </nav>
            </div>
        </div>
    );
}

function MenuItem({ link, text, image }) {
    const itemRef = React.useRef(null);
    const marqueeRef = React.useRef(null);
    const marqueeInnerRef = React.useRef(null);

    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (mouseX, mouseY, width, height) => {
        const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
        const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
        return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const distMetric = (x, y, x2, y2) => {
        const xDiff = x - x2;
        const yDiff = y - y2;
        return xDiff * xDiff + yDiff * yDiff;
    };

    const handleMouseEnter = ev => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    };

    const handleMouseLeave = ev => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    };

    const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
        <React.Fragment key={idx}>
            <span className="text-black">{text}</span>
            <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
        </React.Fragment>
    ));

    const isInternal = link && link.startsWith('/');

    return (
        <div className="menu__item section-border" ref={itemRef}>
            {isInternal ? (
                <Link className="menu__item-link" to={link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {text}
                </Link>
            ) : (
                <a className="menu__item-link" href={link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {text}
                </a>
            )}
            <div className="marquee" ref={marqueeRef}>
                <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
                    <div className="marquee__inner" aria-hidden="true">
                        {repeatedMarqueeContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlowingMenu;
