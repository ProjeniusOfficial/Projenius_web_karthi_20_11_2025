import { useState } from "react";
import "./Magazine.css";


// Replace these with your own page images
import page1 from "../img/magazineimg.png";
import page2 from "../img/magazineimg.png";
import page3 from "../img/magazineimg.png";


const pages = [page1, page2, page3];


const MagazineSection = () => {
const [currentPage, setCurrentPage] = useState(0);
const [direction, setDirection] = useState<"next" | "prev" | "">("");


const nextPage = () => {
if (currentPage < pages.length - 1) {
setDirection("next");
setTimeout(() => {
setCurrentPage(prev => prev + 1);
setDirection("");
}, 600);
}
};


const prevPage = () => {
if (currentPage > 0) {
setDirection("prev");
setTimeout(() => {
setCurrentPage(prev => prev - 1);
setDirection("");
}, 600);
}
};


return (
<section className="magazine-section">
<div className="magazine-header">
<span className="story-tag">Our Story</span>
<h2>Our Magazine</h2>
<p>A glimpse into our journey, ideas, and creative vision.</p>
</div>


<div className="magazine-wrapper">
<button className="nav-btn left" onClick={prevPage}>
‹
</button>


<div className="magazine-book">
<img
src={pages[currentPage]}
className={`magazine-page ${direction}`}
alt={`Page ${currentPage + 1}`}
/>
</div>


<button className="nav-btn right" onClick={nextPage}>
›
</button>
</div>


<div className="page-indicator">
Page {currentPage + 1} / {pages.length}
</div>


<a href="/magazine.pdf" download className="download-btn">
Download Magazine
</a>
</section>
);
};


export default MagazineSection;