import Link from 'next/link'
import getConfig from 'next/config';
import { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router'
import ApiService from '../api/data'

const { publicRuntimeConfig } = getConfig();

type Food = {
    id: number;
    title: string;
    description: string;
    nutrition: string;
}

const emptyFood = {
    id: 0,
    title: '',
    description: '',
    nutrition: ''
}

export default function Food() {
    const [data, setData] = useState<Food>(emptyFood)
    const [next, setNext] = useState<Food>(emptyFood)
    const router = useRouter()
    const pathname = router.query.id
    const imgURL = publicRuntimeConfig.imgUrl

    const getChow = () => {
        const id = Number(pathname)
        ApiService.getFood().then((response) => {
            const food = response.data.find((item: Food) => item.id === id)
            const next = response.data.find((item: Food) => item.id !== id)
            if(food) setData(food)
            if(next) setNext(next)
        })
    }

    useEffect(() => {
        if(pathname) {
            getChow()
        }
    })

    return (
        <>
            <header>
                <img src={imgURL + 'thumbnail_carrots_3_60f5a864c1.jpeg'} width="100%"/>
            </header>
            <main className='flex h-[calc(100vh-200px)] flex-col bg-white relative mt-[-2rem] rounded-t-[2rem] pt-5'>
                <div className='flex pl-5'>
                    <h1 className='text-black font-bold text-lg mb-5'>{data.title}</h1>   
                    <span className='bg-gray-500 ml-auto order-2 me-5 h-[30px] rounded-[5px]'><HeartIcon height={30} className='text-white' /></span>
                </div>
                
                <div className="flex flex-wrap justify-center">
                    <input type="radio" name="tabset" id="tab-one" aria-controls="description" className="peer/tab-one opacity-0 absolute" defaultChecked />
                    <label htmlFor="tab-one" className="relative inline-block me-5 p-3 text-gray-500 cursor-pointer peer-checked/tab-one:text-light peer-checked/tab-one:border-b-4 peer-checked/tab-one:border-light">Description</label>

                    <input type="radio" name="tabset" id="tab-two" aria-controls="facts" className="peer/tab-two opacity-0 absolute" />
                    <label htmlFor="tab-two" className="relative inline-block me-5 p-3 text-gray-500 cursor-pointer peer-checked/tab-two:text-light peer-checked/tab-two:border-b-4 peer-checked/tab-two:border-light">Nutrition facts</label>
                    <div className='relative basis-full w-[100vw] h-0 border-b border-gray-100 mb-5'></div>
                    
                    <div 
                        id="description" 
                        className="tab-panel pl-5 basis-full pe-5 text-black hidden peer-checked/tab-one:block" 
                        dangerouslySetInnerHTML={{__html: data.description}}>
                    </div>
                    <div 
                        id="facts" 
                        className="tab-panel pl-5 basis-full pe-5 text-black hidden peer-checked/tab-two:block" 
                        dangerouslySetInnerHTML={{__html: data.nutrition}}>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full flex text-center mt-5 p-5 rounded-md rounded-t-[2rem] shadow-md shadow-black">
                    <Link 
                        className="bg-obed-light hover:bg-obed-dark text-white font-bold py-2 px-4 rounded w-full" 
                        href={'/food/'+next.id}>Nah! Find something else.
                    </Link>
                </div>
            </main>
        </>
    )
}