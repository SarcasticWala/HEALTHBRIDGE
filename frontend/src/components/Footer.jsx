import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='nd:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40'>
                {/*......left side.....*/}
                <div >
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                {/*......middle side.....*/}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/*......right side.....*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul  className='flex flex-col gap-2 text-gray-600'>
                        <li>9800030435</li>
                        <li>dasayan948@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/*....copy right text...*/}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 AyanDas - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
