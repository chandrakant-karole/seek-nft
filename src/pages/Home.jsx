import React from 'react'
import About from '../components/About'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'

export default function home() {
    return (
        <>
        <Header/>
        <Hero/>
        <About/>
        <Roadmap/>
        <Team/>
        <Faq/>
        <Footer/>
        </>
    )
}
