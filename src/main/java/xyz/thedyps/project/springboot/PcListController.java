package xyz.thedyps.project.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import xyz.thedyps.project.springboot.goods.goodsVO.PcFilterListVO;
import xyz.thedyps.project.springboot.goods.goodsVO.PcListVO;
import xyz.thedyps.project.springboot.service.PcListService;

import java.util.List;

@RestController
public class PcListController {

	@Autowired
	PcListService service;

	@RequestMapping(value = "/pcListCount", method = RequestMethod.GET)
	public ResponseEntity<Integer> getPcListCount
			(@RequestParam(value="pcType", required = false, defaultValue="Office") String pcType) {
		return new ResponseEntity<>(service.getPcListCount(pcType), HttpStatus.OK);
	}

	@RequestMapping(value = "/pcList", method = RequestMethod.GET)
	public ResponseEntity<List<PcListVO>> getPcList
			(@RequestParam(value="pcType", required = false, defaultValue="Office") String pcType) {
		return new ResponseEntity<>(service.getPcList(pcType, 1, 10), HttpStatus.OK);
	}

	@RequestMapping(value = "/pcFilterList", method = RequestMethod.GET)
	public ResponseEntity<PcFilterListVO> getPcFilterList
			(@RequestParam(value="pcType", required = false, defaultValue="Office") String pcType) {
		return new ResponseEntity<>(service.getFilterList(), HttpStatus.OK);
	}
}
