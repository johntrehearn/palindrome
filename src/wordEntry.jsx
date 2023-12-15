

function Word({checkPal, wordEnt}) {
    return (
        <>
        <input id="word" type='text' placeholder='The magic starts here' value={wordEnt}
        onChange={checkPal}/>
        {/* <button onClick={checkPal}>Check Palindrome</button> */}
        </>
    )
}

export default Word;