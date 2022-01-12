
class Helper{

    public static ValidaQuality(quality: number): number{
        if(quality< 0) {
            quality = 0;
        }
        else if(quality >50){
            quality = 50;
        }
        return quality;
    }

}