import { useEffect, useState } from 'react'

import './project/styles.css'
import './project/cinematic.css'

import { Nav, useCursor, useReveal } from './project/navbar.jsx'
import { SocialSection } from './project/social-cards.jsx'
import { bootCinematic, useScrollTriggerReveals, SparkleShower } from './project/cinematic.jsx'
import { Hero } from './project/hero.jsx'
import { AboutPreview, About } from './project/about-us.jsx'
import { Services } from './project/services.jsx'
import { Portfolio } from './project/portfolio.jsx'
import { Testimonials } from './project/testimonials.jsx'
import { Inquiry, BlogPreview } from './project/contact.jsx'
import { Footer } from './project/footer.jsx'
import ServiceScroll from './project/service-scroll.jsx'
import { useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakSelect } from './project/tweaks-panel.jsx'
import {
  AboutPage, ServicesPage, PortfolioPage, DestinationPage,
  DecorationPage, CateringPage, EventManagementPage, ArtistPage,
  SoundSystemPage, LogisticsPage, InvitationsPage, CorporateEventsPage,
  VenueBookingPage,
  GalleryPage, BlogPage, ContactPage
} from './pages.jsx'

const TWEAK_DEFAULTS = {

palette:'Maroon & Ivory',

grain:true,

cursor:true

}

const PALETTES = {

'Maroon & Ivory':{

cream:'#F8F3EA',

cream2:'#EDE4D2',

paper:'#FDFAF4',

ink:'#2E0F14',

sage:'#C41515',

bronze:'#B89358',

bronze2:'#D4B97A',

line:'#D6C4AE'

},

'Deep Maroon':{

cream:'#F1E4D4',

cream2:'#E0CCB4',

paper:'#F6EBD9',

ink:'#1F0A0D',

sage:'#B01010',

bronze:'#A8823E',

bronze2:'#C9A658',

line:'#CFB99A'

},

'Sage & Cream':{

cream:'#F0E9DA',

cream2:'#E6DDC8',

paper:'#F7F2E6',

ink:'#1E1C18',

sage:'#2E3A2D',

bronze:'#9A7A48',

bronze2:'#B89968',

line:'#C9BFA8'

}

}

function applyPalette(name){

const p=

PALETTES[name]

||

PALETTES['Maroon & Ivory']

const r=document.documentElement

r.style.setProperty('--cream',p.cream)

r.style.setProperty('--cream-2',p.cream2)

r.style.setProperty('--paper',p.paper)

r.style.setProperty('--ink',p.ink)

r.style.setProperty('--sage-deep',p.sage)

r.style.setProperty('--bronze',p.bronze)

r.style.setProperty('--bronze-2',p.bronze2)

r.style.setProperty('--line',p.line)

}

function MobileFloat() {
  return (
    <div className="mob-float">
      <a href="tel:+919602198888" className="mob-float-btn" aria-label="Call us">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
        </svg>
      </a>
      <a href="https://wa.me/919602198888" target="_blank" rel="noopener noreferrer" className="mob-float-btn mob-float-wa" aria-label="WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.884-.788-1.481-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>
        </svg>
      </a>
    </div>
  )
}

export default function App(){

const [t,setTweak]=

useTweaks(TWEAK_DEFAULTS)

const [page, setPage] = useState(window.location.hash.slice(1) || 'home')

useReveal()

useScrollTriggerReveals()

useCursor()

useEffect(()=>{

const handleHashChange = () => {
  const hash = window.location.hash.slice(1) || 'home'
  setPage(hash)
}

window.addEventListener('hashchange', handleHashChange)
return () => window.removeEventListener('hashchange', handleHashChange)

},[])

useEffect(()=>{
window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
},[page])

useEffect(()=>{

if (page === 'home') {
  const els = document.querySelectorAll('.reveal, .clip-reveal')
  els.forEach(el => el.classList.remove('in-view'))

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view')
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
  els.forEach(el => io.observe(el))

  return () => io.disconnect()
}

},[page])

useEffect(()=>{

bootCinematic()

},[])

useEffect(()=>{

applyPalette(t.palette)

},[t.palette])

useEffect(()=>{

const grain=

document.getElementById('grain')

if(grain)

grain.style.display=

t.grain?'':'none'

},[t.grain])

useEffect(()=>{

const cursor=

document.getElementById('cursor')

if(cursor)

cursor.style.display=

t.cursor?'':'none'

document.body.style.cursor=

t.cursor?'none':''

},[t.cursor])

if (page === 'about') return (
  <>
    <Nav/>
    <AboutPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'services') return (
  <>
    <Nav/>
    <ServicesPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'portfolio') return (
  <>
    <Nav/>
    <PortfolioPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'decoration') return (
  <>
    <Nav/>
    <DecorationPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'catering') return (
  <>
    <Nav/>
    <CateringPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'event-management') return (
  <>
    <Nav/>
    <EventManagementPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'artist') return (
  <>
    <Nav/>
    <ArtistPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'sound-system') return (
  <>
    <Nav/>
    <SoundSystemPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'logistics') return (
  <>
    <Nav/>
    <LogisticsPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'invitations') return (
  <>
    <Nav/>
    <InvitationsPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'corporate') return (
  <>
    <Nav/>
    <CorporateEventsPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'destination') return (
  <>
    <Nav/>
    <DestinationPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'gallery') return (
  <>
    <Nav/>
    <GalleryPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'blog') return (
  <>
    <Nav/>
    <BlogPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'venue-booking') return (
  <>
    <Nav/>
    <VenueBookingPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

if (page === 'contact') return (
  <>
    <Nav/>
    <ContactPage/>
    <Footer/>
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood">
        <TweakSelect label="Palette" value={t.palette} options={['Maroon & Ivory', 'Deep Maroon', 'Sage & Cream']} onChange={(v)=>setTweak('palette', v)}/>
      </TweakSection>
      <TweakSection label="Style">
        <TweakToggle label="Film grain" value={t.grain} onChange={(v)=>setTweak('grain', v)}/>
        <TweakToggle label="Custom cursor" value={t.cursor} onChange={(v)=>setTweak('cursor', v)}/>
      </TweakSection>
    </TweaksPanel>
  </>
)

return(

<>

<SparkleShower />

<Nav/>

<main>

<Hero/>

{/* SERVICE CATEGORY SCROLL */}

<ServiceScroll/>

<AboutPreview/>

<Services/>

<SocialSection/>

<Portfolio/>

<Testimonials/>

<Inquiry/>

<BlogPreview/>

</main>

<Footer/>

<TweaksPanel title="Tweaks">

<TweakSection label="Mood">

<TweakSelect

label="Palette"

value={t.palette}

options={[

'Maroon & Ivory',

'Deep Maroon',

'Sage & Cream'

]}

onChange={(v)=>

setTweak(

'palette',

v

)

}

/>

</TweakSection>

<TweakSection label="Style">

<TweakToggle

label="Film grain"

value={t.grain}

onChange={(v)=>

setTweak(

'grain',

v

)

}

/>

<TweakToggle

label="Custom cursor"

value={t.cursor}

onChange={(v)=>

setTweak(

'cursor',

v

)

}

/>

</TweakSection>

</TweaksPanel>

</>

)

}