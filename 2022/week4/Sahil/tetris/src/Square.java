import java.awt.*;

public class Square  {

    public Point location;
    public int size=Tetris.sqSz;
    Color foreColor=Color.green;
    Color backColor;
    public Square(){

    }
    public void show(Graphics g){
        //System.out.println("drawing square.."+Tetris.sqSz);
        g.setColor(foreColor);
        g.fillRect(100,0,size,size);


    }
   /* private boolean down()
    {
        if(Tetris.IsEmpty(this, Nav.SOUTH)) {
        hide();
        location.y += sqrSz;
        show();
        return true;
    }
     else { // add to array
        Tetris.stopSquare(this);
        return false;
    }
    }
    private boolean left()
    {
        if(Tetris.IsEmpty(this,Nav.
                WEST) ){
            hide();
            location.x -= sqrSz;
            show();
            return true;
        }else{ // add to array
            return false;
        }
    }*/
}

