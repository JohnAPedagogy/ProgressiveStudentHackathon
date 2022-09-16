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
import org.w3c.dom.css.Rect;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Tetris extends JPanel implements KeyListener, FocusListener  {
    public static int width = 16;
    // public IntPair location;
    public static int height = 32;
    public static int sqSz = 10;
    public static Color backColor;
    static int bitEmpty = 0;
    public static Square TestSqaure;

    int bitFull = 1 << width;
    private static final Square[][] arrGameField = new Square[width][height];
    private static final int[] arrBitGameField = new int[height];

    public static boolean isEmpty(int x, int y) {
//if y or x is beyond game field
        if ((y < 0 || y >= height) || (x < 0 || x >= width)) {
            return false;
        }
// test x bit of yth line of game field
        if ((arrBitGameField[y] & (x << 1)) != 0)
            return false;
        return true;
    }

    public Tetris() {
        addKeyListener(this);
        System.out.println("constructor run");
    }

    public void paintComponent(Graphics g) {
        Graphics2D g2 = (Graphics2D) g;
        TestSqaure = new Square(this);

        drawGame(g);
        TestSqaure.show(g);

    }

    public int top() {
        return getBounds().y;
    }

    public int centerAxis() {
        Rectangle b = getBounds();
        return b.x + (b.width) / 2;
    }

    public Rectangle getBounds() {
        int w = getWidth(); // Find out the width of this
        int h = getHeight();
        int tw = (Tetris.width * Tetris.sqSz);
        int th = Tetris.height * Tetris.sqSz;
        int gw = (w - tw) / 2;
        int gh = (h - th) / 2;
        return new Rectangle(gw, gh, tw, th);
    }

    public void drawGame(Graphics g) {
        Rectangle b = getBounds();
        g.setColor(Color.RED);
        g.fillRect(b.x, b.y, b.width, b.height);

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
    @Override
    public void keyTyped(KeyEvent e) {
        System.out.println("not working");
//when a key is typed (KeyChar, Char output)
        switch (e.getKeyChar()) {
            case 'a' ->
                //board.setLocation(board.getX()-1,board.getY());
                    System.out.println("pressed a");
            case 'w' ->
                // board.setLocation(board.getX(),board.getY()-1);
                    System.out.println("pressed w");
            case 's' ->
                // board.setLocation(board.getX(),board.getY()+1);
                    System.out.println("pressed s");
            case 'd' ->
                //board.setLocation(board.getX()+1,board.getY());
                    System.out.println("pressed d");
        }
    }

    public void focusGained(FocusEvent evt) {
        System.out.println("got focus");  // redraw with cyan border
    }

    /**
     * This will be called when the panel loses the input focus.  It just
     * calls repaint().  The panel will be redrawn with a gray-colored border
     * and with the message "Click to activate."
     */
    public void focusLost(FocusEvent evt) {
        System.out.println("lost focus");  // redraw without cyan border
    }

    @Override
    public void keyPressed(KeyEvent e) {
//when a physical key pressed down KeyCode, int output
System.out.println("key pressed");
//when a key is typed (KeyChar, Char output)
        switch (e.getKeyChar()) {
            case 'a' ->
                // board.setLocation(board.getX()-1,board.getY());
                    System.out.println("pressed a");
            //repaint();
            case 'w' ->
                // board.setLocation(board.getX(),board.getY()-1);
                    System.out.println("pressed w");
            case 's' ->
                // board.setLocation(board.getX(),board.getY()+1);
                    System.out.println("pressed s");
            case 'd' ->
                //board.setLocation(board.getX()+1,board.getY());
                    System.out.println("pressed d");
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {
///when a key is released
    }
    Timer timer = new Timer(4000, new ActionListener() {
        public void actionPerformed(ActionEvent evt) {
            repaint();
        }
    });
    public static void main(String[] args) {
        //
        System.out.println("tetris");
        Tetris game = new Tetris();
        JFrame frame = new JFrame("Game Field");
        frame.setSize(400, 500);
        frame.setResizable(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        panel.setSize(100, 200);
        panel.setBackground(Color.yellow);
        // panel.setSize(50,100);
        JButton b1 = new JButton("Start");
        //b1.setVisible(true);
        JLabel scoreLabel = new JLabel("Score Label");
        // scoreLabel.setVisible(true);
        panel.add(b1);
        panel.add(scoreLabel);
        frame.setVisible(true);
        frame.getContentPane().add(panel, BorderLayout.NORTH);
        frame.getContentPane().add(game, BorderLayout.CENTER);
        System.out.println("requesting..");
        game.requestFocusInWindow();
    }
}
