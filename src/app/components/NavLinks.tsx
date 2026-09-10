import Link from 'next/link';

interface NavLinksProps {
    extraClassName?: string;
}

// Server Component - no hooks or browser APIs
const NavLinks: React.FC<NavLinksProps> = ({ extraClassName = "" }) => {
    return (
        <>
        <ul className={`navigation ${extraClassName}`}>
            <li className="current"><Link href="/">Home</Link></li>
            <li><Link href="/page-about">About</Link></li>
            <li><Link href="/page-testimonial">Testimonial</Link></li>
            <li className="dropdown mega-menu-item"><Link href="/page-services">Services</Link>
                <div className="mega-menu">
                    <div className="mega-menu-column">
                        <h4>Web &amp; Software Development</h4>
                        <Link href="/page-service-details">Web Development</Link>
                        <Link href="/page-service-details">Web Application Development</Link>
                        <Link href="/page-service-details">Custom Software Development</Link>
                        <Link href="/page-service-details">Mobile App Development</Link>
                        <Link href="/page-service-details">E-commerce Development</Link>
                        <Link href="/page-service-details">WordPress &amp; CMS Development</Link>
                        <Link href="/page-service-details">UI/UX Design</Link>
                        <Link href="/page-service-details">Software Maintenance &amp; Support</Link>
                    </div>
                    <div className="mega-menu-column">
                        <h4>AI &amp; Automation</h4>
                        <Link href="/page-service-details">AI Software Solutions</Link>
                        <Link href="/page-service-details">AI Chatbots &amp; Virtual Assistants</Link>
                        <Link href="/page-service-details">AI Agent Development</Link>
                        <Link href="/page-service-details">AI Automation &amp; Workflow Solutions</Link>
                        <Link href="/page-service-details">Generative AI Solutions</Link>
                        <Link href="/page-service-details">AI-Powered Web &amp; Mobile Apps</Link>
                        <Link href="/page-service-details">Custom AI Integration &amp; API Development</Link>
                        <Link href="/page-service-details">RAG &amp; Knowledge-Based AI Systems</Link>
                    </div>
                    <div className="mega-menu-column">
                        <h4>Growth &amp; Digital</h4>
                        <Link href="/page-service-details">SEO &amp; Digital Marketing</Link>
                        <Link href="/page-service-details">Performance Optimization</Link>
                        <Link href="/page-service-details">Conversion Rate Optimization (CRO)</Link>
                    </div>
                </div>
            </li>
            <li><Link href="/page-blog">Blog</Link></li>
            <li><Link href="/page-contact">Contact</Link></li>
            {/*
            <li className="current dropdown"><Link href="/">Home</Link>
                <ul>
                    <li><Link href="/">Home 01</Link></li>
                    <li><Link href="/index-2">Home 02</Link></li>
                    <li><Link href="/index-3">Home 03</Link></li>
                    <li><Link href="/index-4">Home 04</Link></li>
                    <li><Link href="/index-5">Home 05</Link></li>
                    <li><Link href="/index-6">Home 06</Link></li>
                    <li className="dropdown"><Link href="/#">Header Styles</Link>
                        <ul>
                            <li><Link href="/">Header Style One</Link></li>
                            <li><Link href="/index-2">Header Style Two</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Pages</Link>
                <ul>
                    <li><Link href="/page-about">About</Link></li>
                    <li><Link href="/page-contact">Contact</Link></li>
                    <li><Link href="/page-team">Team</Link></li>
                    <li><Link href="/page-team-details">Team Details</Link></li>
                    <li><Link href="/page-testimonial">Testimonial</Link></li>
                    <li><Link href="/page-faq">Faqs</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Project</Link>
                <ul>
                    <li><Link href="/page-project">Project</Link></li>
                    <li><Link href="/page-project-details">Project Details</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Service</Link>
                <ul>
                    <li><Link href="/page-services">Service</Link></li>
                    <li><Link href="/page-service-details">Service Details</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Blog</Link>
                <ul>
                    <li><Link href="/page-blog">Blog</Link></li>
                    <li><Link href="/page-blog-details">Blog Details</Link></li>
                </ul>
            </li>
            */}
        </ul>

        </>
    );
};

export default NavLinks;
