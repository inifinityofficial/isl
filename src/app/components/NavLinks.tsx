import Link from 'next/link';
import { SERVICE_MENU_GROUPS } from '../data/services';

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
            <li className="dropdown mega-menu-item"><Link href="/services">Services</Link>
                <div className="mega-menu">
                    {SERVICE_MENU_GROUPS.map((group) => (
                        <div className="mega-menu-column" key={group.heading}>
                            <h4>{group.heading}</h4>
                            {group.items.map((item) => (
                                <Link href={`/services/${item.slug}`} key={item.slug}>{item.title}</Link>
                            ))}
                        </div>
                    ))}
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
                    <li><Link href="/services/web-development">Service Details</Link></li>
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
