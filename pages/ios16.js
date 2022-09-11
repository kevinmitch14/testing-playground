import React from 'react'

const ios16 = () => {
    return (
        <>
            {/* Container of box */}
            <div class="relative overflow-hiddden w-[90%] mt-12 mx-auto md:w-[625px] md:m-20 rounded-[30px] min-h-[340px] md:min-h-[680px] bg-gradient-to-br from-blue-600 to-cyan-400">
                <div className="mx-auto flex flex-col px-[40px] max-w-[655px] pt-[36px]">
                    <div className="tile-header">
                        <h3 class="text-white text-[21px] leading-[1.20] font-semibold tracking-[0.011em]">
                            New Mailbox Features
                        </h3>
                    </div>

                    <div className="prev-typography self-start max-w-full md:pt-[100px] md:pr-[40px] md:pb-[110px] md:pl-[40px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="md:w-10 my-4 -rotate-45 md:h-10 w-5 h-5 text-white"
                        >
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                        <p class="typography-blockquote-copy text-white text-[30px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.005em]">
                            Undo send.
                            <br /> Schedule send.
                            <br /> Follow up.
                            <br /> Add rich links.
                        </p>
                    </div>
                </div>

                {/* Checkbox */}
                <input type="checkbox" id="check" className='invisible' />

                {/* Overlay */}
                <div className="overlay">
                    <label className="z-50" for='check'>
                        <div className="bg-white/80 w-10 h-10 rounded-full flex items-center justify-center">
                            <span className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>
                    </label>



                    <div className='overlay-filler rounded-[30px] opacity-0 invisible flex flex-col flex-1 absolute w-full h-full top-0 left-0'>
                        <div className="tile-header flex flex-col px-[40px] max-w-[655px] pt-[36px]">
                            <h3 class="text-white text-[21px] leading-[1.20] font-semibold tracking-[0.011em]">
                                New Mailbox Features
                            </h3>
                        </div>
                        <div className='pt-[20px] md:pt-[100px] pr-[40px] pb-[110px] pl-[40px]'>
                            <p class="typography text-white opacity-0  text-sm md:text-[17px] leading-[1.47] md:font-semibold">Easily unsend an email you just sent, schedule messages to be sent whenever you like, and get reminders to follow up or come back to a message later.
                                You can also add rich links so your email has even more details at a glance. And if you forget to include an attachment or a recipient, Mail will catch those mistakes and ask if you want to add what’s missing.
                            </p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ios16