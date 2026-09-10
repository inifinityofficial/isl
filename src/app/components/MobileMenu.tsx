"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  extraClassName?: string;
}

interface DropdownState {
  status: boolean;
  key: number | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ extraClassName }) => {
  const [isActive, setIsActive] = useState<DropdownState>({
    status: false,
    key: null,
  });

  const [isSubActive, setSubIsActive] = useState<DropdownState>({
    status: false,
    key: null,
  });

  const handleClick = (key: number) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: null });
    } else {
      setIsActive({ status: true, key });
    }
  };

  const handleSubClick = (key: number) => {
    if (isSubActive.key === key) {
      setSubIsActive({ status: false, key: null });
    } else {
      setSubIsActive({ status: true, key });
    }
  };

  return (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/page-about">About</Link></li>
      <li><Link href="/page-testimonial">Testimonial</Link></li>
    <li className="dropdown"><Link href="/page-services">Services</Link>
        <ul className={`mobile-services ${isActive.key === 3 ? "d-block" : "d-none"}`}>
            <li className="mobile-service-heading">Web &amp; Software Development</li>
            <li><Link href="/page-service-details">Web Development</Link></li>
            <li><Link href="/page-service-details">Web Application Development</Link></li>
            <li><Link href="/page-service-details">Custom Software Development</Link></li>
            <li><Link href="/page-service-details">Mobile App Development</Link></li>
            <li><Link href="/page-service-details">E-commerce Development</Link></li>
            <li><Link href="/page-service-details">WordPress &amp; CMS Development</Link></li>
            <li><Link href="/page-service-details">UI/UX Design</Link></li>
            <li><Link href="/page-service-details">Software Maintenance &amp; Support</Link></li>
            <li className="mobile-service-heading">AI &amp; Automation</li>
            <li><Link href="/page-service-details">AI Software Solutions</Link></li>
            <li><Link href="/page-service-details">AI Chatbots &amp; Virtual Assistants</Link></li>
            <li><Link href="/page-service-details">AI Agent Development</Link></li>
            <li><Link href="/page-service-details">AI Automation &amp; Workflow Solutions</Link></li>
            <li><Link href="/page-service-details">Generative AI Solutions</Link></li>
            <li><Link href="/page-service-details">AI-Powered Web &amp; Mobile Apps</Link></li>
            <li><Link href="/page-service-details">Custom AI Integration &amp; API Development</Link></li>
            <li><Link href="/page-service-details">RAG &amp; Knowledge-Based AI Systems</Link></li>
            <li className="mobile-service-heading">Growth &amp; Digital</li>
            <li><Link href="/page-service-details">SEO &amp; Digital Marketing</Link></li>
            <li><Link href="/page-service-details">Performance Optimization</Link></li>
            <li><Link href="/page-service-details">Conversion Rate Optimization (CRO)</Link></li>
        </ul>
        <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down"/></div>
    </li>
    <li><Link href="/page-blog">Blog</Link></li>
    <li><Link href="/page-contact">Contact</Link></li>
    {/*
      <li className="dropdown"><Link href="/">Home</Link>
        <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
          <li><Link href="/">Home page 01</Link></li>
          <li><Link href="/index-2">Home page 02</Link></li>
          <li><Link href="/index-3">Home page 03</Link></li>
          <li><Link href="/index-4">Home page 04</Link></li>
          <li><Link href="/index-5">Home page 05</Link></li>
          <li><Link href="/index-6">Home page 06</Link></li>
        </ul>
        <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
      </li>
      <li className="dropdown"><Link href="/">Pages</Link>
        <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
          <li><Link href="/page-about">About</Link></li>
          <li><Link href="/page-faq">Faq</Link></li>
          <li className="dropdown"><Link href="/">Team</Link>
            <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
              <li><Link href="/page-team">Team List</Link></li>
              <li><Link href="/page-team-details">Team Details</Link></li>
            </ul>
            <div className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(3)}><i className="fa fa-angle-down"/></div>
          </li>
          <li><Link href="/page-testimonial">Testimonials</Link></li>
        </ul>
        <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down"/></div>
      </li>
      <li className="dropdown"><Link href="/">Services</Link>
        <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
          <li><Link href="/page-services">Services</Link></li>
          <li><Link href="/page-service-details">Services Details</Link></li>
        </ul>
        <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down"/></div>
      </li>
      <li className="dropdown"><Link href="/">News</Link>
        <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
          <li><Link href="/page-blog">News Grid</Link></li>
          <li><Link href="/page-blog-details">News Details</Link></li>
        </ul>
        <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i className="fa fa-angle-down"/></div>
      </li>
    */}
    </>
  );
};

export default MobileMenu;