import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Global/Footer'
import Header from '../Global/Header'
import styles from '../styles/Home.module.css'
import HomePage from './home/HomePage'

export default function Home() {
  return (
    <>
    <Header />
    <HomePage />
    <Footer />
    </>
  )
}
