import React from 'react'

const Questions = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
                    <div className="max-w-screen-md mx-auto">
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Can I use Landwind in open-source projects?
                                </div>
                                <div className="collapse-content">
                                    <p>Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.

                                        Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Is there a Figma file available?
                                </div>
                                <div className="collapse-content">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Landwind.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    What about browser support?
                                </div>
                                <div className="collapse-content">
                                    <p>The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.

                                        However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Questions