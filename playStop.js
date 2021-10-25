function play(){
    if (!document.demo.IsPlaying()){
        document.demo.play();
    }
}
 function stop() {
     if (document.demo.IsPlaying()){
         document.demo.stopPlay();
     }
 }

 function rewind () {
     if (document.demo.IsPlaying()) {
         document.demo.stopPlay();
     }
     document.demo.Rewind();
 }