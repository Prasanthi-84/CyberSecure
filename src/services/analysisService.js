


export const analyzeText=async(text)=>{

    await new Promise(resolve=>setTimeout(resolve,2000))

    const suspiciousWords=['breaking','shocking','unbelievable'
        ,'doctors hate','secert'
    ];
    const wordCount=text.split(' ').length;
    const suspiciousCount=suspiciousWords.filter(word=>
        text.toLowerCase().includes(word)
    ).length;

    const score=Math.max(0,Math.min(100,
        (suspiciousCount*30)+(wordCount <50 ? 20 : 0)+
        Math.random()*20
    ));
    return{
        score:Math.round(score),
        classification:score>70 ? 'likely-fake':score>40 ?
        'questionable':'likely-real',
        confidence:Math.round(85+Math.random()*10),
        details:{
            wordCount,
            suspiciousKeywords:suspiciousCount,
            sources:Math.floor(Math.random()*5),
            factChecked:Math.random()>0.5
        }

    }
}