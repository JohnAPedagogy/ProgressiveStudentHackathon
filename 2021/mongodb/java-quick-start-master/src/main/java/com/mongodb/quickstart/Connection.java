package com.mongodb.quickstart;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class Connection {

    public static void main(String[] args) {

        String connString = System.getProperty("mongodb.uri");
        ConnectionString connectionString = new ConnectionString(connString);
        System.out.println(String.format("connecting. to %s ************",connString));
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(connectionString)
                .build();
        System.out.println("creating settings. ************");
        MongoClient mongoClient = MongoClients.create(settings);
        System.out.println("getting the database. ************");
        MongoDatabase database = mongoClient.getDatabase("progressive");
        System.out.println("done. ************");
        try {
            System.out.println("listing the database. ************");
            List<Document> databases = mongoClient.listDatabases().into(new ArrayList<>());
            System.out.println("list complete. ************");
            databases.forEach(db -> System.out.println(db.toJson()));
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}
/*

        String connectionString = System.getProperty("mongodb.uri");
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            List<Document> databases = mongoClient.listDatabases().into(new ArrayList<>());
            databases.forEach(db -> System.out.println(db.toJson()));
        }

ConnectionString connectionString = new ConnectionString("mongodb+srv://admin:<password>@cluster0.phtaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
MongoClientSettings settings = MongoClientSettings.builder()
        .applyConnectionString(connectionString)
        .build();
MongoClient mongoClient = MongoClients.create(settings);
MongoDatabase database = mongoClient.getDatabase("test");

timed out after 30000 ms while waiting for a server that matches com.mongodb.client.internal.MongoClientDelegate$1@5e0051bc. Client view of cluster state is {type=REPLICA_SET, servers=[{address=cluster0-shard-
00-00.phtaz.mongodb.net:27017, type=UNKNOWN, state=CONNECTING, exception={com.mongodb.MongoSocketReadException: Prematurely reached end of stream}}, {address=cluster0-shard-00-02.phtaz.mongodb.net:27017, type=
UNKNOWN, state=CONNECTING, exception={com.mongodb.MongoSocketReadException: Exception receiving message}, caused by {java.net.SocketException: Socket is closed}}

 */