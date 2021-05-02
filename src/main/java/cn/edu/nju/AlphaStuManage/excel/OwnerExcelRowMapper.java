package cn.edu.nju.AlphaStuManage.excel;

import org.springframework.batch.extensions.excel.RowMapper;
import org.springframework.batch.extensions.excel.support.rowset.RowSet;

import cn.edu.nju.AlphaStuManage.model.Owner;

public class OwnerExcelRowMapper implements RowMapper<Owner> {

	@Override
	public Owner mapRow(RowSet rowSet) throws Exception {

		String[] cols = rowSet.getCurrentRow();
		Owner student = new Owner();
		// System.out.println(cols[0]);
		student.setId(Integer.getInteger(cols[0]));
		student.setName(cols[1]);
		student.setDepartment(cols[2]);
		student.setNumber(cols[3]);

		return student;
	}

}
