package com.example.onlineshoppingdemo;


import com.example.onlineshoppingdemo.Service.ProductService;
import com.example.onlineshoppingdemo.Service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;

@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@SpringBootApplication
public class ShoppingCartApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext applicationContext = SpringApplication.run(ShoppingCartApplication.class, args);

        ProductService productService = applicationContext.getBean(ProductService.class);
        productService.saveInitialBatch();

        UserService userService = applicationContext.getBean(UserService.class);
        userService.saveInitialBatch();


    }
}
