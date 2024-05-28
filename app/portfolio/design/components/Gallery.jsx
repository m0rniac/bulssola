"use client"
import React from 'react'
import { Gallery } from "react-grid-gallery";






export default function GalleryPOSTS({ images_obj, str_categorie }) {

    return (
        <React.Fragment>
            <div className='container-fluid w-75 mt-4 p-3'>
                <h5>{str_categorie}</h5>
                <Gallery images={images_obj} />
            </div>
        </React.Fragment>
    )
}
