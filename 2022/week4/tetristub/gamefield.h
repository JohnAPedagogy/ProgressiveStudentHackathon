#ifndef GAMEFIELD_H
#define GAMEFIELD_H
#include <QObject>
#include <QColor>
#include <QGraphicsScene>

//forward declare
class Square;
class Block;

enum BoardEvent
{
    North,
    East,
    South,
    West
};

class GameField: public QObject
{
    Q_OBJECT
public:
    GameField();
    ~GameField();
    //logic width and height are in unites of the sqauare
    int width = 15;  //15 squares along horizontal axis
    int height= 18;  //18 squares along the vertical axis
    QPair<int,int> sqSz;
    QColor color;
    QVector<Square> gameFieldArray;// stores stuck squares
    int * bitFieldArray; //stores the logical structure
    Square* TestSquare;
    Block* currentBlock;
    Block* nextBlock;
    void testSqaure(QGraphicsScene *s);
    void start(QGraphicsScene *s);
    int centreAxis(){return width/2;}
    int boardWidth();
    int boardHeight();
    void add(Square&);
    void addRange(QVector<Square> range);
    void remove(Square);
    void removeRange(QVector<Square> range);
    const QPair<int,int> b2l(QPair<int,int> location);
    const QPair<int,int> b2l(QPointF location);
    void nullify(Square * s);
signals:
    void boardChanged(BoardEvent direction);
public slots:
    void mapLogical(QPointF c, int result);
    void boardEvent(BoardEvent);
};

#endif // GAMEFIELD_H
