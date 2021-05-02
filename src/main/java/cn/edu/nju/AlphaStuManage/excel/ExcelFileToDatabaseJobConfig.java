package cn.edu.nju.AlphaStuManage.excel;

import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.extensions.excel.poi.PoiItemReader;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.FileSystemResource;

import cn.edu.nju.AlphaStuManage.model.Owner;

@Configuration
@EnableBatchProcessing
public class ExcelFileToDatabaseJobConfig {

	@Autowired
	public JobBuilderFactory jobBuilderFactory;

	@Autowired
	public StepBuilderFactory stepBuilderFactory;

	@Bean
	public PoiItemReader<Owner> reader() {
		PoiItemReader<Owner> reader = new PoiItemReader<>();
		reader.setResource(new FileSystemResource("src/main/resources/students.xlsx"));
		reader.setLinesToSkip(1);
		reader.setRowMapper(new OwnerExcelRowMapper());
		return reader;

	}

	@Bean
	public OwnerItemProcessor processor() {
		return new OwnerItemProcessor();
	}

	@Bean
	public JdbcBatchItemWriter<Owner> writer(DataSource dataSource) {
		return new JdbcBatchItemWriterBuilder<Owner>()
				.itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
				.sql("INSERT INTO owners VALUES (:id, :name, :gender, :birthday, :address, :department,:number)")
				.dataSource(dataSource).build();
	}

	@Bean
	public Step step1(JdbcBatchItemWriter<Owner> writer) {
		return stepBuilderFactory.get("step1").<Owner, Owner>chunk(1).reader(reader()).processor(processor())
				.writer(writer).build();
	}

	@Bean
	public Job importOwnerJob(Step step1) {
		return jobBuilderFactory.get("importOwnerJob").incrementer(new RunIdIncrementer()).flow(step1).end().build();
	}

}
