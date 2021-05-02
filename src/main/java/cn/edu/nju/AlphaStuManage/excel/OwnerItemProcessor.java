package cn.edu.nju.AlphaStuManage.excel;

import org.springframework.batch.item.ItemProcessor;
import cn.edu.nju.AlphaStuManage.model.Owner;

public class OwnerItemProcessor implements ItemProcessor<Owner, Owner> {

	@Override
	public Owner process(Owner student) throws Exception {
		Owner res = new Owner();
		res.setId(student.getId());
		res.setName(student.getName());
		res.setGender("未知");
		res.setBirthday("未知");
		res.setAddress("未知");
		res.setDepartment(student.getDepartment());
		res.setNumber(student.getNumber());

		return res;

	}

}
