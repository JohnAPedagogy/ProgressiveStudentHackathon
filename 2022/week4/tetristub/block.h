#ifndef BLOCK_H
#define BLOCK_H
#include <QGraphicsItem>
#include "gamefield.h"

class Square;

enum BlockTypes{
    R ,
    O ,
    I ,
    J ,
    L ,
    T ,
    Z ,
    S ,
    btsz
};
class Block : public QGraphicsItem
{
private:
    void createBlockO();
    void createBlockI();
    void createBlockJ();
    BlockTypes blockType;
    BlockTypes newBlockType=BlockTypes::R;
    BoardEvent nextRotation;
    int y0(int x){return 1+x;}

public:
    void initBlock();
    Block();
    Block(BlockTypes type);
    Square *s1;
    Square *s2;
    Square *s3;
    Square *s4;
    QString bts = "ROIJLTZS";
    QString ess = "NESW";
    void paint(QPainter *painter,
               const QStyleOptionGraphicsItem *option,
               QWidget *widget) override;
    void advance(int phase) override;
    QRectF boundingRect() const override;
    int gca; //game centre axis
    void rotateBlockI();
    void rotate();
    void moveDown();
    void rotateBlockJ();
    void locFromLogical(int x, int y);
};

#endif // BLOCK_H
