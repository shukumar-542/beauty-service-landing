export default function page() {
    return (
        <div className="container mx-auto px-6 py-20 mt-10">
            <div className="">
                {/* Header */}
                <p className="text-xs uppercase tracking-wide text-[#8B7A85] mb-2">
                    Welcome to Stunner Alert!
                </p>

                <h2 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
                    Join Our Pioneer Vendor Circle
                </h2>

                {/* Intro */}
                <div className="space-y-6 text-[15px] leading-relaxed text-[#533F4E]">
                    <p>
                        <strong>Run your business — don&apos;t let endless DMs run you!</strong>{" "}
                        We know how exhausting it can be to chase late payments, send
                        manual quotes, and reply to scattered Instagram messages all day.
                    </p>

                    <p>
                        That is why we are building a simpler way to book clients. We are
                        launching soon on the App Store and Google Play, and we want to
                        help Australia&apos;s best beauty, hair, photography, cake, and event
                        professionals get noticed from day one.
                    </p>

                    {/* What You Get */}
                    <ul className="list-disc pl-6 space-y-4">
                        <li>
                            <strong>Free Advertising:</strong> We will feature your portfolio on our
                            website to help you reach a whole new crowd.
                        </li>

                        <li>
                            <strong>Launch Perks:</strong> Enjoy 100% free access to our platform for
                            your first month with absolutely no listing or registration costs.
                        </li>

                        <li>
                            <strong>Top Spot Placement:</strong> Get your business listed right at the
                            top of local search results when the app goes live.
                        </li>

                        <li>
                            <strong>Easy Booking Tools:</strong> Say goodbye to hidden pricing and
                            hello to quick bookings.
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="pt-8">
                        <h2 className="font-serif text-2xl md:text-3xl text-[#372D38] mb-4">
                            Ready to show off your business?
                        </h2>

                        <p>
                            Spaces are limited so we can give our founding pros the
                            spotlight they deserve.
                        </p>

                        <p className="mt-4 font-semibold text-[#372D38]">
                            Just drop us an email at{" "}
                            <a
                                href="mailto:info@stunneralert.com.au"
                                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                            >
                                info@stunneralert.com.au
                            </a>{" "}
                            to secure your free feature!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}