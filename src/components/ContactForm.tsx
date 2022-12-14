import { AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ContactFormPen } from './ContactFormPen';


type ContactFormProps = {
    services: {name: string}[]
}

export const ContactForm = ({services}: ContactFormProps) => {
    const [isTyping, setIsTyping] = useState(false);
    const [selected, setSelected] = useState<'name' | 'email' | 'message'>('name');

    const handleTyping = () => {
        setIsTyping(true);
    }

    useEffect(() => {
        console.log({ isTyping });
        if (!isTyping) return;
        
        const typingTimeout = setTimeout(() => {
            setIsTyping(false);
          }, 100)

          return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
          }
      }, [isTyping]);

    return (
        <AnimateSharedLayout>
        <form className="flex flex-col max-w-lg mx-auto gap-1">
            <label htmlFor="name" className="text-xs uppercase">Nom</label>
            <div className='relative flex'>
                <input name="name" type="text" placeholder="Entrez votre nom..." onFocus={() => setSelected('name')} onChange={handleTyping} className="w-full bg-bg1 px-4 py-2 rounded-md"/>
                {selected === 'name' && (<ContactFormPen isTyping={isTyping} />)}
            </div>
            <label htmlFor="email" className="mt-4 text-xs uppercase">Email</label>
            <div className='relative flex'>
                <input name="email" type="email" placeholder="Entrez votre email..." onFocus={() => setSelected('email')} onChange={handleTyping} className="w-full bg-bg1 px-4 py-2 rounded-md"/>
                {selected === 'email' && (<ContactFormPen isTyping={isTyping} />)}
            </div>
            <fieldset className="mt-4">
                <legend className="text-xs uppercase">Choisissez un service (ou +)</legend>
                <ul className="mt-2 grid grid-cols-3 justify-items-center gap-4">
                    {services.map(service => (
                        <li key={service.name} className="flex flex-col gap-1 items-center">
                            <input className="w-24 h-24 rounded-lg" name={service.name} type="checkbox" />
                            <label htmlFor={service.name}>{service.name}</label>
                        </li>
                    ))}
                </ul>
            </fieldset>
            <label htmlFor="message" className="mt-4 text-xs uppercase">Message</label>
            <div className='relative'>
                <textarea name="message" placeholder="Entrez votre message..." onFocus={() => setSelected('message')} onChange={handleTyping} className="w-full bg-bg1 px-4 py-2 rounded-md min-h-[4rem] max-h-48" rows={5}></textarea>
                {selected === 'message' && (<ContactFormPen isTyping={isTyping} />)}
            </div>
            <button type="submit" className="mt-4 bg-primary text-white px-4 py-2 rounded-md">Envoyer</button>
        </form>
        </AnimateSharedLayout>
    )
}