#ifndef SQUARE_H
#define SQUARE_H
#include <QColor>
#include <QRectF>
#include <QPainter>

class Square
{
 public:
    QPair<int,int> size;
    QPair<int,int> loc;
    QColor fore;
    QColor back;

    bool collision();
    Square();
    Square(int x, int y);
    Square(QColor f, QColor b);
    Square(int x, int y, QColor f, QColor b);
    Square(const Square& s):size(s.size),fore(s.fore),back(s.back),loc(s.loc){
        //setPos(s.pos());
    }
    Square& operator= ( const Square &s ){
        loc=s.loc;
        size=(s.size);fore=(s.fore);back=(s.back);
    }
    ~Square(){}
    QRectF boundingRect();
    void paint(QPainter *paintert);
    void locFromLogical(int x, int y);
    bool operator==(const Square&);
protected:
    void advance();

private:
    //void doCollision();
};

#endif // SQUARE_H
