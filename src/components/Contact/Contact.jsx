const Contact = () => {


    return (
        <>
            {/* <a href="mailto:samuele12601@gmail.com"><img src="public/images/gmail.png" alt="link to my email" /></a>
            <a href="https://www.linkedin.com/in/samuele-marino-7baa9a27b/"><img src="public/images/linkedin.png" alt="LinkedIn profile" /></a> */}
            <footer class="container-fluid d-flex align-items-center justify-content-center flex-column">
                <h3 id="encontrame">Encontrame en</h3>
                <div class="container d-flex align-items-center justify-content-around flex-wrap">
                    <span><img src="public/images/gmail.png" alt="link to my email" /></span>
                    <span><img src="public/images/linkedin.png" alt="LinkedIn profile" /></span>
                    <span><img src="public/images/github.png" alt="Github profile" /></span>
                </div>
            </footer>

        </>
    )
}

export default Contact