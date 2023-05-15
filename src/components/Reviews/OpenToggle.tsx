import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useMutation } from "react-query";
import axios from "axios";
import { Puff } from 'react-loader-spinner'



type Props = {
    itemId: string
    enabled: boolean
    refetch: () => void
}

export default function OpenToggle(props: Props) {
    const [enabled, setEnabled] = useState(props.enabled)

    const mutation = useMutation(async (itemId: string) =>
        await axios.put(`/api/reviews`, {
            itemId: itemId,
        })
    );

    const handleChange = async () => {
        setEnabled((prevEnabled) => !prevEnabled);
        await mutation.mutateAsync(props.itemId);
        props.refetch()
    };

    console.log("enabled", mutation.isLoading)


    return (
        <div className="flex items-center justify-center">
            <Switch
                checked={enabled}
                onChange={handleChange}
                className={`${enabled ? 'bg-primary-700' : 'bg-gray-600'} relative inline-flex h-[24px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-6' : 'translate-x-0'} pointer-events-none flex items-center justify-center h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out `}
                >
                    {mutation.isLoading && (
                        <Puff
                            height="20"
                            width="20"
                            radius={1}
                            color="#06b6d4"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    )}

                </span>
            </Switch>
        </div>
    )
}
