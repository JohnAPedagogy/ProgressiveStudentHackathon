#include "tetris.h"
#include "gamefield.h"

GameField::GameField()
{
    sqSz.first = Tetris::SQS;
    sqSz.second = Tetris::SQS;
    bitFieldArray = new int[height];
    for(int i=0; i<width; i++)bitFieldArray[i]=0;
    color = QColor(200,200,200);
    connect(this, &GameField::boardChanged, this, &GameField::boardEvent);
}
const QPair<int,int> GameField::b2l(QPair<int,int> l){
    return QPair<int,int>(l.first/sqSz.first, l.second/sqSz.second);
}
const QPair<int,int> GameField::b2l(QPointF l){
    return QPair<int,int>(l.x()/sqSz.first, l.y()/sqSz.second);
}
void GameField::testSqaure(QGraphicsScene * scene)//unused, previously used to test square
{
    auto ca = Tetris::Game.centreAxis();
    TestSquare = new Square();
    TestSquare->locFromLogical(ca,1);
    TestSquare->fore = Qt::blue;
    TestSquare->back = Qt::red;
    //scene->addItem(TestSquare);
}
void GameField::start(QGraphicsScene * scene)
{
    currentBlock = new Block();
    scene->addItem(currentBlock);
}
GameField::~GameField()
{
    delete[] bitFieldArray;
    bitFieldArray=nullptr;
}
void GameField::add(Square &s){
    gameFieldArray.append(s) ;
}
void GameField::addRange(QVector<Square> range){
    for(auto &i:range)add(i);
}
void GameField::remove(Square s){
    int i = gameFieldArray.indexOf(s);
    gameFieldArray.remove(i);
}
void GameField::removeRange(QVector<Square> range){
    for(const auto &i:range)remove(i);
}
void GameField::nullify(Square * s)
{
    s->back = color;
    s->fore = color;
}

int GameField::boardWidth(){
    return  width * sqSz.first;
}

int GameField::boardHeight(){
    return height * sqSz.second;
}

void GameField::mapLogical(QPointF p, int result){
    QPair<int,int> c = b2l(p);
    if(c.first >= this->width || c.first < 0 || c.second >= this->height || c.second < 0) return;
    int t = bitFieldArray[c.second];
    bitFieldArray[c.second] =result? t|(1 << c.first): t & (1 << c.first);
}


void GameField::boardEvent(BoardEvent direction){
//    if(TestSquare->collision()){
//        qDebug() << "colliding..";
//        return;
//    }
    //mapLogical(TestSquare->pos(),0);
    switch (direction) {
    case BoardEvent::East:
        //testSquare->moveRight();
        //TestSquare->locFromLogical(1,0);
        break;
    case BoardEvent::West:
        //testSquare->moveLeft();
        //TestSquare->locFromLogical(-1,0);
        break;
    case BoardEvent::South:
        currentBlock->moveDown();
        break;
    case BoardEvent::North:
        currentBlock->rotate();
        break;
//    case BoardEvent::North:
//        //testSquare->force();
//        break;
    default:
        qDebug() << "Invalid Board event ";
    }
    //mapLogical(TestSquare->pos(),1);

}
