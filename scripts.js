function updateVidandTitle(dictValue){
    let title = document.getElementById('video-title');
    let video = document.getElementById('video-frame');
    title.innerText = dictValue + ', ' + dict[dictValue].country ;
    video.src = dict[dictValue].src;
}

let dict = {}

let presets = '?modestbranding=1&rel=0&loop=1&autoplay=1&autohide=1&showinfo=0&controls=0&amp;start=30'

dict.Paris= {
    'src' : 'https://www.youtube.com/embed/ME2zyNBh3JM'+presets,
    'country' : 'France'
}

dict.London={
    'src' : 'https://www.youtube.com/embed/Cn1DtODqtOc' + presets,
    'country' : 'United Kingdom'
}

dict.Athens={
    'src' : 'https://www.youtube.com/embed/AHuXzPMZLR0?start=1270&modestbranding=1&rel=0&loop=1&autoplay=1&autohide=1&showinfo=0&controls=0&amp;',
    'country' : 'Greece'
}