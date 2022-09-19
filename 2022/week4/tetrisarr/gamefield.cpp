#include "gamefield.h"

GameField::GameField()
{
    sqSz.first = Tetris::SQS;
    sqSz.second = Tetris::SQS;
    gameFieldArray = new Square*[width];
    for(int i = 0; i < width; ++i)
        gameFieldArray[i] = new Square[height];
    bitFieldArray = new int[height];
    for(int i=0; i<width; i++)bitFieldArray[i]=0;
    color = QColor(Qt::red);
    connect(this, &GameField::boardChanged, this, &GameField::mapLogical);

}
QPair<int,int> GameField::b2l(QPair<int,int> l){
    return QPair<int,int>(l.first/sqSz.first, l.second/sqSz.second);
}

GameField::~GameField()
{
    for(int i = 0; i < width; ++i){
        delete[] gameFieldArray[i];
        //gameFieldArray[i]=nullptr;
    }delete[] gameFieldArray;
    gameFieldArray = nullptr;
    delete[] bitFieldArray;
    bitFieldArray=nullptr;
}
void GameField::add(Square* s){
    QPair<int,int> loc = b2l(s->loc);
    Square *s1 = gameFieldArray[loc.first]+loc.second ;
    s1 = s;
    emit boardChanged(s1->loc,1);
}
void GameField::addRange(QVector<Square *> range){
    for(auto i:range)add(i);
}
void GameField::remove(Square* s){
    QPair<int,int> loc = b2l(s->loc);
    nullify(s);
    gameFieldArray[loc.first][loc.second] = *s;
    emit boardChanged(s->loc,1);
}
void GameField::removeRange(QVector<Square*> range){
    for(auto i:range)remove(i);
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

void GameField::mapLogical(QPair<int,int> c, int result){
    int t = bitFieldArray[c.second];
    bitFieldArray[c.second] =result? t|(1 << c.first): t & (1 << c.first);
}
