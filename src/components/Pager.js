import React from 'react';

export default function Pager(count) {
    console.log(count)

    let pageNumbers = count / 50
    for (let i = 0; i < pageNumbers; i++) {
        console.log("I", i)
    }



    return (
        < div >
        </div >
    )
}