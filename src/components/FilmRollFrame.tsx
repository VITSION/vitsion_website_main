import { ReactNode } from 'react';

interface FilmRollFrameProps {
    children: ReactNode;
}

const FilmRollFrame = ({ children }: FilmRollFrameProps) => {
    return (
        <div className="relative film-roll-frame">
            {/* Inner clipping area */}
            <div className="film-roll-viewport">
                {children}
            </div>
        </div>
    );
};

export default FilmRollFrame;
