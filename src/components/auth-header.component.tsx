import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function AuthHeader(props: any) {
    return (
        <header className="absolute bg-obed-light h-[40vh] w-[414px] pl-5 rounded-bl-[40%] rounded-br-[60%]">
                <ChevronLeftIcon className="size-7 mt-5"/>
            <h1 className="flex font-bold mt-40 text-3xl">{props.title}</h1>
        </header>
    )
}