import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { categoryImages } from '@/components/store/images';
export default function Categories() {
  const categories = [["Men's Wear",'Men'],["Women's Wear",'Women'],['T-Shirts','T-Shirts'],['Hoodies','Hoodies'],['Trousers','Trousers'],['Dresses','Dresses'],['Accessories','Accessories']];
  return <section className="section" id="categories" data-reveal><div className="section-heading"><div><span className="eyebrow">FIND YOUR EVERYDAY</span><h2>Shop By Category</h2></div><Link className="inline-link" to="/#shop">View all pieces <ArrowUpRight size={17}/></Link></div><div className="categories-grid">{categories.map(([label,filter],i)=><Link key={filter} to={`/?category=${encodeURIComponent(filter)}#shop`} className="category-card"><div className="category-photo"><Image className="block h-full w-full" src={categoryImages[i]} alt={`SQI Wears ${label} collection`} loading="lazy"/></div><div><h3>{label}</h3><ArrowUpRight size={16}/></div></Link>)}</div></section>;
}