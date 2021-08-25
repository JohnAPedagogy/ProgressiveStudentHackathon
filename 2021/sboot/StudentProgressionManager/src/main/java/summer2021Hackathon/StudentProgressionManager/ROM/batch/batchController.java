package ROM.batch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/batchs")
public class BatchController {

    @Autowired
    BatchRepository batchRepository;

    @GetMapping
    List<Batch> getBatchs() {
        return batchRepository.findAll();
    }

    @PostMapping
    Batch createBatch(@RequestBody Batch batch) {
        return batchRepository.save(batch);
    }
}