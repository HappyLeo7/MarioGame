function gbw(){
    canvse.drawImage(gbw_1_img, gbw_1_x-scrollX*2, gbw_1_y, 50, 50)

    /*let gbw_1_x=1200;
    let gbw_1_y=600;*/

    while(gbw_1_x ++){
        if(gbw_1_x >=600){
            gbw_1_x --;
        }
        if(gbw_1_x <=1800){
            gbw_1_x ++;
        }
    }
}