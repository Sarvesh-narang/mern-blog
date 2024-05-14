import { Footer, FooterTitle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs'

function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='md: grid w-full justify-between sm: flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link to="/" style={{ fontSize: '1.85rem' }} className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white '>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sarvesh's</span>
              Blog
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 '>
            <div>
                <FooterTitle title='About' />
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://www.100projects.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        100 JS Projects
                    </Footer.Link>
                    <Footer.Link
                        href='/about'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Sarvesh's Blog
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>
                <FooterTitle title='Follow us' />
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://github.com/Sarvesh-narang'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Github
                    </Footer.Link>
                    <Footer.Link
                        href='https://discord.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>
                <FooterTitle title='Legal' />
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='#'
                    >
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                        href='#'
                    >
                        Terms  &amp; condition 
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center justify-between'>
            <Footer.Copyright href='#' by="Sarvesh's blog" year={new Date().getFullYear()}/>
        
            <div className='flex gap-6 sm: mt-4 sm: justify-start'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsTwitterX} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsGithub} />
                <Footer.Icon href='#' icon={BsDribbble} />
            </div>   
        </div> 
      </div>
    </Footer>
  );
}

export default FooterCom;
