/*import javax.swing.*;
import java.awt.*;
public class Tetris extends JPanel {
    public static int width = 16;
   // public IntPair location;
    public static int height = 32;
    public int sqSz = 10;
    public static Color backColor;
    static int bitEmpty = 0;

    int bitFull = 1 << width;
    private static final Square[][] arrGameField = new Square[width][height];
    private static final int[] arrBitGameField = new int[height];

    public static boolean isEmpty(int x, int y) {
//if y or x is beyond game field
        if ((y < 0 || y >= height) || (x < 0 || x >= width)) {
            return false;
        }
// test x bit of yth line of game field
        if((arrBitGameField[y] & (x << 1)) != 0)
            return false;
        return true;
    }
    public void paintComponent(Graphics g){
        Graphics2D g2= (Graphics2D)g;
        super.paintComponent(g);
        g.setColor(Color.RED);
        g.fillRect(150,150,60,60);

        int width = getWidth(); // Find out the width of this
       // component.
        int height = getHeight();
    }


    public int checkLines() {
        int result = 0; // no of lines completed
        for (int y = height - 1; y >= 0; ) {
            if
            (arrBitGameField[y] == bitEmpty) y = 0;//stopcondition = blank line
//if all bits are set incrementcounter, clear line, move blocks down
            if (arrBitGameField[y] == bitFull)
// arrBitGameFieild bitFull == 0?
            {
                result++;
//move lines down
                for (int i = y; i >= 0; i--) {
// iff current line notfirst of game field
                    if (i > 0) {
//copy bits from line above
                        arrBitGameField[i] = arrBitGameField[i - 1];
                        for (int x = 0; x < width; x++) {
                            arrGameField[x][i] = arrGameField[x][i - 1];
//updatelocation property;
                            if (arrGameField[x][i] != null) {
                                arrGameField[x][i].location = new Point(arrGameField[x][i].location.x, arrGameField[x][i].location.y + sqSz);
                            }
                        }
                    } else {
//if first //line just clear
                        arrBitGameField[i] = bitEmpty;
                        for (int x = 0; x < width; x++) {
                            arrGameField[x][i] = null;
                        }
                    }
                }

            } else {
                y--;
            }
        }
        return result;
    }

    public static void StopSquare(Square sqr, int x, int y) {
        arrBitGameField[y] = arrBitGameField[y] | (1 << x);
        arrGameField[x][y] = sqr;
    }

   /* public static void Redraw() {
        for (int y = height - 1; y >= 0; y--) {
            int i = 0;
            if (arrBitGameField[y] != bitEmpty)
                for (int x = width; i >= 0; x--)
                    if (arrGameField[x][y] != null) arrGameField[x][y].show();
        }
    } public static boolean IsEmpty(Square s, Nav pos) {

            return arrGameField[s.location.x][s.location.y] != null;
         }

    public static void main(String[] args) {
        //
        Tetris game= new Tetris();
        JFrame frame= new JFrame("Game Field");
        frame.setSize(400,500);
        frame.setVisible(true);
        frame.setResizable(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel= new JPanel();
        panel.setSize(100,200);
        panel.setBackground(Color.yellow);
       // panel.setSize(50,100);
        JButton b1= new JButton("Start");
        //b1.setVisible(true);
        JLabel scoreLabel= new JLabel("Score Label");
       // scoreLabel.setVisible(true);
        panel.add(b1);
        panel.add(scoreLabel);
        panel.add(game);

        frame.getContentPane().add(panel,BorderLayout.NORTH);
    }
}*/
import javax.swing.*;
import java.awt.*;
public class Tetris extends JPanel {
    public static int width = 16;
    public static Square TestSqaure= new Square();
    // public IntPair location;
    public static int height = 32;
    public static int sqSz = 10;
    public static Color backColor;
    static int bitEmpty = 0;

    int bitFull = 1 << width;
    private static final Square[][] arrGameField = new Square[width][height];
    private static final int[] arrBitGameField = new int[height];

    public static boolean isEmpty(int x, int y) {
//if y or x is beyond game field
        if ((y < 0 || y >= height) || (x < 0 || x >= width)) {
            return false;
        }
// test x bit of yth line of game field
        if((arrBitGameField[y] & (x << 1)) != 0)
            return false;
        return true;
    }
    public void paintComponent(Graphics g){
        Graphics2D g2= (Graphics2D)g;
        //super.paintComponent(g);
        drawGame(g);
        TestSqaure.show(g);




    }
    public void drawGame(Graphics g){
        int w = getWidth(); // Find out the width of this
        // component.
        int h = getHeight();
        int tw=(Tetris.width*Tetris.sqSz);
        int th=Tetris.height*Tetris.sqSz;
        int gw= (w-tw)/2;
        int gh= (h-th)/2;
        g.setColor(Color.RED);
        g.fillRect(gw,gh,tw,th);

    }



    public int checkLines() {
        int result = 0; // no of lines completed
        for (int y = height - 1; y >= 0; ) {
            if
            (arrBitGameField[y] == bitEmpty) y = 0;//stopcondition = blank line
//if all bits are set incrementcounter, clear line, move blocks down
            if (arrBitGameField[y] == bitFull)
// arrBitGameFieild bitFull == 0?
            {
                result++;
//move lines down
                for (int i = y; i >= 0; i--) {
// iff current line notfirst of game field
                    if (i > 0) {
//copy bits from line above
                        arrBitGameField[i] = arrBitGameField[i - 1];
                        for (int x = 0; x < width; x++) {
                            arrGameField[x][i] = arrGameField[x][i - 1];
//updatelocation property;
                            if (arrGameField[x][i] != null) {
                                arrGameField[x][i].location = new Point(arrGameField[x][i].location.x, arrGameField[x][i].location.y + sqSz);
                            }
                        }
                    } else {
//if first //line just clear
                        arrBitGameField[i] = bitEmpty;
                        for (int x = 0; x < width; x++) {
                            arrGameField[x][i] = null;
                        }
                    }
                }

            } else {
                y--;
            }
        }
        return result;
    }

    public static void StopSquare(Square sqr, int x, int y) {
        arrBitGameField[y] = arrBitGameField[y] | (1 << x);
        arrGameField[x][y] = sqr;
    }

   /* public static void Redraw() {
        for (int y = height - 1; y >= 0; y--) {
            int i = 0;
            if (arrBitGameField[y] != bitEmpty)
                for (int x = width; i >= 0; x--)
                    if (arrGameField[x][y] != null) arrGameField[x][y].show();
        }
    }*/

    public static boolean IsEmpty(Square s, Nav pos) {

        return arrGameField[s.location.x][s.location.y] != null;
    }

    public static void main(String[] args) {
        //
        Tetris game= new Tetris();
        JFrame frame= new JFrame("Game Field");
        frame.setSize(400,500);
        frame.setResizable(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel= new JPanel();
        panel.setSize(100,200);
        panel.setBackground(Color.yellow);
        // panel.setSize(50,100);
        JButton b1= new JButton("Start");
        //b1.setVisible(true);
        JLabel scoreLabel= new JLabel("Score Label");
        // scoreLabel.setVisible(true);
        panel.add(b1);
        panel.add(scoreLabel);
        frame.setVisible(true);
        frame.getContentPane().add(panel,BorderLayout.NORTH);
        frame.getContentPane().add(game,BorderLayout.CENTER);
    }
}
