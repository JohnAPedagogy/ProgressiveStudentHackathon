#ifndef GAMEFIELD_H
#define GAMEFIELD_H
#include "square.h"
#include "tetris.h"


//forward declare
class Square;
//class Tetris;

class GameField: public QObject
{
    Q_OBJECT
public:
    GameField();
    ~GameField();
    int width = 20;
    int height= 20;
    QPair<int,int> sqSz;
    QColor color;
    Square** gameFieldArray;// stores physical structure
    int * bitFieldArray; //stores the logical structure

    int centreAxis(){return width/2;}
    int boardWidth();
    int boardHeight();
    void add(Square *);
    void addRange(QVector<Square *> range);
    void remove(Square *);
    void removeRange(QVector<Square *> range);
    QPair<int,int> b2l(QPair<int,int> location);
    void nullify(Square * s);
signals:
    void boardChanged(QPair<int,int> c, int result);
public slots:
    void mapLogical(QPair<int,int> c, int result);
};

#endif // GAMEFIELD_H
