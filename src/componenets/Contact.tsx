const Contact = () => {
    return (
        <div id="contact" className="w-full h-screen flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/25357a02-121d-472c-8db8-f84db7851c5c" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-400 text-white">Contact</p>
                    <p className="text-white py-4" >// Submit the form below or shoot me an email at: andrew.doerfler@gmail.com</p>
                </div>
                <input type="text" name="Name" placeholder="Name" className="border-2 border-white rounded-md px-4 py-2 mb-4  text-black bg-white"/>
                <input type="text" name="Email" placeholder="Email" className="border-2 border-white rounded-md px-4 py-2 mb-4  text-black bg-white"/>
                <input type="text" name="Subjet" placeholder="Subject" className="border-2 border-white rounded-md px-4 py-2 mb-4 text-black bg-white"/>
                <textarea name="Message" id="" cols={30} rows={10} placeholder="Message" className="border-2 border-white rounded-md px-4 py-2 mb-4  text-black bg-white"></textarea>
                <button className="border-2 border-white rounded-md px-4 py-2 mb-4 text-black bg-white hover:border-pink-400 hover:bg-pink-400">Submit</button>
            </form>
        </div>
    );
    };

export default Contact;