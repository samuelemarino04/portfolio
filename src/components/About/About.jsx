import './About.css'


const About = () => {


    return (
        <>
            <section class="container-fluid section-sobre">
                <h2 class="sobre" id="sobre">About</h2>
                <div class="container sobre-container d-md-flex justify-content-md-around">
                    <div class="p-2 align-self-md-start">
                        <img src="public/images/samuiron.jpg" alt="profile pic" className='samuiron' />
                    </div>
                    <div class="p-2 align-self-md-end">
                        <p class="text-justify">
                            I am a versatile professional with a comprehensive skill set acquired through intensive bootcamps in both Full Stack Development and DevOps engineering. As a Full Stack Developer, I bring proficiency in JavaScript, Node.js, HTML, CSS, React, Express, and MongoDB, enabling me to design and implement robust and responsive web applications. Transitioning seamlessly into the DevOps realm, I have honed my expertise in cloud technologies like Azure, containerization tools such as Docker, orchestration with Kubernetes, and infrastructure as code using Terraform and Ansible. This dual proficiency empowers me to bridge the gap between development and operations, ensuring a seamless and efficient end-to-end software delivery process. My commitment to continuous learning and adaptability positions me as a dynamic professional ready to contribute to innovative and collaborative projects.</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About