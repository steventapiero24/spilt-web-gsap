const HeroSection = () => {
  return (
    <section className="bg-main-bg">
        <div className="hero-container">
            <img src="/images/static-img.png" alt="image-hero"  className="absolute bottom-0 left-1/2 -translate-x-1/2 objet-auto scale-100 md:scale-150"/>
            <div className="hero-content">
                <div className="overflow-hidden">
                    <h1 className="hero-title">Jodidamente delicioso</h1>
                </div>
                <div 
                    style={{
                        clipPath: "polygon(50% 0, 0% 0, 0% 100%, 50% 100%)",
                    }}
                    className="hero-text-scroll"
                >
                    <div className="hero-subtitle">
                        <h1>Proteina + cafeina</h1>
                    </div>
                </div>
                <h2>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>
                <div className="hero-button">
                    <button className="">Bebe uno ahora</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection