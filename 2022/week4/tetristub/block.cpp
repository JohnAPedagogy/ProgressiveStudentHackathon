#include "tetris.h"


Block::Block(BlockTypes type)
{
    newBlockType = type;
    initBlock();
}

Block::Block()
{
    initBlock();
}

void Block::initBlock()
{
    gca = Tetris::Game.centreAxis();
    for(int i=0;i<100;i++)
    if(newBlockType==BlockTypes::R){//Randomize
        int typ = qrand()%3;
        qDebug() << "i got " << bts[typ+1];
        blockType = (BlockTypes)(typ+1);
    }else{
        blockType = newBlockType;
    }
    //create squares
    s1 = new Square(Tetris::foreColors[blockType], Tetris::backColors[blockType]);
    s2 = new Square(Tetris::foreColors[blockType], Tetris::backColors[blockType]);
    s3 = new Square(Tetris::foreColors[blockType], Tetris::backColors[blockType]);
    s4 = new Square(Tetris::foreColors[blockType], Tetris::backColors[blockType]);
    qDebug() << "blockType = " << bts[blockType] << " ss=" << s1->size.first;

    //...
    switch(blockType)
    {
    case BlockTypes::O:
        //create square
        createBlockO();
        break;
    case BlockTypes::I:
        //create
        createBlockI();
        break;
    case BlockTypes::J:
        //create
        createBlockJ();
        break;
    default:
        qDebug() << "invalid type";
    }
}

void Block::paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget)
{
//    qDebug() << "block paint" << s1->loc.first;
    for (auto &s:{s1,s2,s3,s4})s->paint(painter);
}

void Block::rotate()
{
    switch(blockType)
    {
    case BlockTypes::O:
        //O doesn't rotate
        //rotateBlockO();
        break;
    case BlockTypes::I:
        //rotate I
        rotateBlockI();
        break;
    case BlockTypes::J:
        //rotate I
        rotateBlockJ();
        break;
    default:
        qDebug() << "invalid block in rotate block";
    }
    qDebug() << "updating";
    update();
}
void Block::rotateBlockI()
{
    qDebug() << "rotating blockI";
    auto l2 = Tetris::Game.b2l(s2->loc);
    switch(nextRotation){
    case North:
        nextRotation = BoardEvent::East;
        s1->locFromLogical(l2.first-1,l2.second);
        s3->locFromLogical(l2.first+1, l2.second);
        s4->locFromLogical(l2.first+2,l2.second);
        break;
    case East:
        nextRotation = BoardEvent::North;
        s1->locFromLogical(l2.first,l2.second-1);
        s3->locFromLogical(l2.first, l2.second+1);
        s4->locFromLogical(l2.first,l2.second+2);
        break;
    default:
        qDebug()<< "Invalid Rotation";
        nextRotation=BoardEvent::North;
    }

}
void Block::rotateBlockJ()
{
    qDebug() << "rotating blockJ";
    auto cr = Tetris::Game.b2l(s3->loc);
    switch(nextRotation){
    case North:
        nextRotation = BoardEvent::East;
        s1->locFromLogical(cr.first+2,cr.second);
        s2->locFromLogical(cr.first+1, cr.second);
        s4->locFromLogical(cr.first,cr.second-1);
        break;
    case East:
        nextRotation = BoardEvent::South;
        s1->locFromLogical(cr.first,cr.second-1);
        s2->locFromLogical(cr.first, cr.second+1);
        s4->locFromLogical(cr.first,cr.second+2);
        break;
    case South:
        nextRotation = BoardEvent::West;
        s1->locFromLogical(cr.first-2,cr.second);
        s2->locFromLogical(cr.first-1, cr.second);
        s4->locFromLogical(cr.first,cr.second+1);
        break;
    case West:
        nextRotation = BoardEvent::North;
        s1->locFromLogical(cr.first,cr.second-2);
        s2->locFromLogical(cr.first, cr.second-1);
        s4->locFromLogical(cr.first-1,cr.second);
        break;
    default:
        qDebug()<< "Invalid Rotation";
        nextRotation=BoardEvent::North;
    }

}
void Block::createBlockO()
{
    s1->locFromLogical(gca,y0(0));
    s2->locFromLogical(gca+1, y0(0));
    s3->locFromLogical(gca, y0(1));
    s4->locFromLogical(gca+1,y0(1));
}
void Block::createBlockJ()
{
    s1->locFromLogical(gca,y0(0));
    s2->locFromLogical(gca,y0(1));
    s3->locFromLogical(gca,y0(2));
    s4->locFromLogical(gca-1,y0(2));
}
void Block::createBlockI()
{
    s1->locFromLogical(gca,y0(0));
    s2->locFromLogical(gca,y0(1));
    s3->locFromLogical(gca,y0(2));
    s4->locFromLogical(gca,y0(3));
    nextRotation = BoardEvent::East;
}
void Block::advance(int phase)
{
    if(!phase) return;
//    if(!collision()){
        emit Tetris::Game.boardChanged(BoardEvent::South);
//    }
}
void Block::locFromLogical(int x, int y)
{
    QPoint loc;
    loc.setX(x*Tetris::SQS);
    loc.setY(y*Tetris::SQS);
    setPos(mapToParent(loc.x(),loc.y()));
    //qDebug() << "locfrom logical " << size.first << "," << x;
}
void Block::moveDown(){
    locFromLogical(0,1);
}
QRectF Block::boundingRect() const
{
    int x = qMax(s1->loc.first,qMax(s2->loc.first,qMax(s3->loc.first,s4->loc.first)));
    int y = qMax(s1->loc.second,qMax(s2->loc.second,qMax(s3->loc.second,s4->loc.second)));
    return QRectF(0,0,x,y);
}
