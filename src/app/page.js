/*
* @author Po-Yang <patrick080963@gmail.com>
*/
import Link from "next/link";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer,
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle
} from "flowbite-react";

export default function Home() {
  const item=
  [
   {  cover:"/image/banner-1.jpg ",
      name:"棒球場",
      description:"棒子跟球互碰的地方",
   },
   { cover:"/image/banner-2.jpg",
    name:"瀑布",
    description:"大曝度",
  },
  { cover:"/image/banner-3.jpg ",
    name:"車站",
    description:"一堆輪子經過的地方",
  }
  ]
  return (
    <>
    <div className="bg-white">
    <div className ="container mx-auto">
      <Navbar fluid className="bg-cyan-800">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">Hi</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" className="text-white ">
            <span className="px-4 py-2 hover:text-yellow-500  hover:border-b-2">交通</span>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-white">
            景點
          </NavbarLink>
          <NavbarLink href="#" className="text-white">指南</NavbarLink>
          <NavbarLink href="#" className="text-white">食物</NavbarLink>
          <NavbarLink href="#" className="text-white">關於我們</NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle/>
      </Navbar>
      </div>
    </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/image/banner-1.jpg" alt="由 En.wikipedia upload by Kc0616 - From en.wikipedia; description page is (was) here, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=1673443" />
          <img src="/image/banner-2.jpg" alt="由 LiCheng Shih - https://www.flickr.com/photos/papilioshih/52345866635/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129989689" />
          <img src="/image/banner-3.jpg" alt="由 I, SElefant, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=129992042" />
          <img src="/image/banner-4.jpg" alt="由 abc759kimo - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=94599070" />
          <img src="/image/banner-5.jpg" alt="由 Fcuk1203 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=129500663" />
        </Carousel>
      </div>
      <div className="bg-white py-16">
      <div className ="container mx-auto grid grid-cols-4 gap-4">
        {item.map(item =>
      <Card
        className="max-w-sm"
        imgAlt= {item.name}
        imgSrc= {item.cover}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
        <Button>
          Read more
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card> 
        )}
      </div>
      </div>
      <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
      </Footer>
    </>
  );
}
