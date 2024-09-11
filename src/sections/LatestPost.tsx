

export const LatestPost = () => {
  return (
    <section className="py-60 ">
        <div className="container">
            <h2 className="font-heading font-black text-4xl text-center">Intelligence Amplified</h2>
            <p className="text-xl text-center text-zinc-400 mt-8">
                Keep up with the latest trandes, news and updates from CerebroX.
            </p>
            <div className="mt-16">
            {[...new Array(4)].fill(0).map((_item, _index) => (
                
                <div>
                    <div>Technology</div>
                    <h3>
                        The Future of AI: Cognitive Computing
                    </h3>
                    <p>
                        Discover how cognitive computing is transforming the way we interact with technology and the world around us.
                    </p>
                    <div>
                        <button>Read more</button>
                        <div>arrow</div>
                    </div>
                </div>
            
            ))}


            </div>

        </div>
    </section>
  )
}