

function Word({checkPal, wordEnt}) {
    return (
        <>
        <input id="word" type='text' placeholder='HELLO' value={wordEnt}
        onChange={checkPal}/>
        {/* <button onClick={checkPal}>Check Palindrome</button> */}
        </>
    )
}

export default Word;