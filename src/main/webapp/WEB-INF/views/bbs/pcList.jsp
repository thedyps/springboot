<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<div class="container-fluid">
	<div id="mainImgSlide" class="carousel slide" data-ride="carousel">
		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-target="#mainImgSlide" data-slide-to="0" class="active"></li>
			<li data-target="#mainImgSlide" data-slide-to="1"></li>
		</ol>
		<!-- Wrapper for slides -->
		<div class="carousel-inner">
			<div class="item active">
				<img src='<c:url value="ShopImages/main-msi.jpg" />' alt="ASUS">
			</div>
			<div class="item">
				<img src='<c:url value="ShopImages/main-gigabyte.jpg" />' alt="MSI">
			</div>
		</div>

		<!-- Left and right controls -->
		<a class="left carousel-control" href="#mainImgSlide" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">이전</span>
		</a> 
		<a class="right carousel-control" href="#mainImgSlide" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span> 
			<span class="sr-only">다음</span>
		</a>
	</div>
	<div class="container">
		<!-- PC의 간략한 정보를 상품 리스트로 출력하는 부분 -->
		<c:if test="${pcListCount <= 0}">
			<h1>${pcType}등록된 상품이 없습니다.</h1>	
		</c:if>
		<c:if test="${pcListCount > 0}">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
					<dl>
						<!--PC의 BRAND 검색해서  체크박스 value생성, span에 표시 -->
						<dt>브랜드명</dt>
						<dd>
							<ul>
							<c:forEach items="${pcFilterListVO.getFilterPcBrand()}" var="filter">
								<li>
									<label>
										<input type="checkbox" name="pcBrand" value="${filter}">
										<span>${filter}</span>
									</label>
								</li>
							</c:forEach>
							</ul>
							<input type="submit" value="검색">
						</dd>
					</dl>
					<dl>
						<!--PC의 CPU KIND 검색해서 체크박스 value생성, span에 표시 -->
						<dt>CPU 종류</dt>
						<dd>
							<ul>
							<c:forEach items="${pcFilterListVO.getFilterCpuKind()}" var="filter">
								<li>
									<label>
										<input type="checkbox" name="cpuKind" value="${filter}">
										<span>${filter}</span>
									</label>
								</li>
							</c:forEach>
							</ul>
							<input type="submit" value="검색">
						</dd>
					</dl>
					<dl>
						<dt>메모리용량</dt>
						<dd>
							<ul>
							<c:forEach items="${pcFilterListVO.getFilterRamSpace()}" var="filter">
								<li>
									<label>
										<input type="checkbox" name="ramSpace" value="${filter}">
										<span>${filter}</span>
									</label>
								</li>
							</c:forEach>
							</ul>
							<input type="submit" value="검색">
						</dd>
					</dl>
					<dl>
						<!--PC의 GRAPHIC KIND 검색해서 value 생성, span에 표시-->
						<dt>그래픽 칩셋 종류</dt>
						<dd>
							<ul>
							<c:forEach items="${pcFilterListVO.getFilterGraKind()}" var="filter">
								<li>
									<label>
										<input type="checkbox" name="graKind" value="${filter}">
										<span>${filter}</span>
									</label>
								</li>
							</c:forEach>
							</ul>
							<input type="submit" value="검색">			
						</dd>
					</dl>
					<!--PC의 OS 검색해서 value 생성, span에 표시-->
					<dl>
						<dt>운영체제</dt>
						<dd>
							<ul>
							<c:forEach items="${pcFilterListVO.getFilterOsName()}" var="filter">
								<li>
									<label>
										<input type="checkbox" name="osName" value="${filter}">
										<span>${filter}</span>
									</label>
								</li>
							</c:forEach>
							</ul>
							<input type="submit" value="검색">
						</dd>
					</dl>					
				</div>
			  	<div class="col-lg-10 col-md-9 col-sm-8 col-xs-12">
					<div>
						<div>
							<div>
								<span>검색하기 :</span>
								<div>
									<input type="text" size="20" id="content-search-bar" name="searchWord">
									<button type="button" class="btn btn-default" aria-label="Search">
				 							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
									</button>
								</div>
							</div>
							<div>
								<span>페이지</span> 
								<span></span>
								<div>
									<button type="button" class="btn btn-default" aria-label="Page Left"
									onClick="location.href='pcList.do=?pageNum=return false;">
				 							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
									</button>
									<button type="button" class="btn btn-default" aria-label="Page Right"
									onClick="location.href='pcList.do=?pageNum=return false;">
				 							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
									</button>
								</div>
							</div>
							<div>
								<span>정렬하기 :</span>
								<div>
									<select name="sortWord" onchange="this.form.submit()">
										<option value="">정렬 기준</option>
										<option value="priceAsc">낮은 가격순</option>
										<option value="priceDesc">높은 가격순</option>
										<option value="gradeDesc">높은 평점순</option>
									</select>
								</div>
							</div>
							<div>
								<span>보기</span>
								<div>
									<button type="button" class="btn btn-default" aria-label="List View">
				 							<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
									</button>
									<button type="button" class="btn btn-default" aria-label="Grid View">
				 							<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
									</button>
								</div>
							</div>
						</div>
						<div>
							<ul>
							<c:forEach var="pc" items="${pcList}">
								<!-- 한 개의  PC 열기-->
								<li>
									<div>
										<div>
											<div>
												<div>
													<a href="pcDetail.jsp?code=${pc.getPcCode()}%>">
													<img src="<c:url value="${pc.getPcListImgVO().getMainImg()}" />" width="240" height="180">
													</a>
												</div>
												<div>
													<div>
														<div>
															<a href="pcDetail.jsp?code=${pc.getPcCode()}">
															<img src="<c:url value="${pc.getPcListImgVO().getBrandImg()}" />">
															</a>
														</div>
														<h2>
															<a href="pcDetail.jsp?code=${pc.getPcCode()}">
																<c:if test="${pc.getSsdSpace() eq null}">
																	<c:out value="${pc.getPcBrand()} 데스크탑 컴퓨터 ${pc.getCpuKind()} (${pc.getCpuSpeed()})
																 	${pc.getHddSpace()} HDD ${pc.getGraphicKind()} ${pc.getOsName() }"/>
																</c:if>
																<c:if test="${pc.getHddSpace() eq null}">
																	<c:out value="${pc.getPcBrand()} 데스크탑 컴퓨터 ${pc.getCpuKind()} (${pc.getCpuSpeed()})
																 	${pc.getSsdSpace()} SSD ${pc.getGraphicKind()} ${pc.getOsName() }"/>
			
																</c:if>
																<c:if test="${!pc.getHddSpace() eq null && !pc.getSsdSpace() eq null}">
																	<c:out value="${pc.getPcBrand()} 데스크탑 컴퓨터 ${pc.getCpuKind()} (${pc.getCpuSpeed()})
																 	${pc.getHddSpace()} HDD ${pc.getSsdSpace()} SSD ${pc.getGraphicKind()} ${pc.getOsName()}"/>
																</c:if>
															</a>
														</h2>
													</div>
												</div>
												<div>
													<div>
														<div>
															<a href="pcDetail.jsp?code=${pc.getPcCode()}"> 
																<span>
																	<strong>
																		<fmt:formatNumber value="${pc.getPcPrice() }" type="number" var="pcPrice" />
																		${pcPrice}원
																	</strong>
																</span>
															</a>
														</div>
														<div>
															<div>
																<span>예상 배송일 :<!-- 오늘 날짜 + 2일 -->
																	<span>
																		${pc.getDeliveryDate()}
																	</span>
																</span>
															</div>
															<div>
																<fmt:formatNumber value="${pc.getPcDeliveryPrice()}" type="number" var="pcDeliveryPrice" />
																<c:if test="${pc.getPcDeliveryPrice() > 0}">
																	<span>배송료 : ${pcDeliveryPrice }원</span>														
																</c:if>
																<c:if test="${pc.getPcDeliveryPrice() <= 0 }">
																	<span>배송료 : 무료 배송</span>
																</c:if>
															</div>
														</div>
													</div>
													<div>
														<div>
															<strong>등급:</strong>
															<span>
																<c:forEach begin="1" end="${pc.getPcGrade() / 20}" step="1" >
																	<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
																</c:forEach>
															</span>
														</div>
														<div>
															<ul>
																<li><strong>CPU: </strong><c:out value="${pc.getCpuKind()} ${pc.getCpuName()} (${pc.getCpuSpeed()})"/></li>
																<li><strong>메모리: </strong><c:out value="${pc.getMainBoardRamLimit()} ${pc.getRamSpeed()}"/></li>
																						
																<c:if test="${pc.getSsdSpace() eq null}">
																	<li><strong>저장장치: </strong><c:out value="${pc.getHddSpace()} HDD"/></li>
																</c:if>
																<c:if test="${pc.getHddSpace() eq null}">
																	<li><strong>저장장치: </strong><c:out value="${pc.getSsdSpace()} SSD"/></li>
																</c:if>
																<c:if test="${!pc.getHddSpace() eq null && !pc.getSsdSpace() eq null}">
																	<li><strong>저장장치: </strong><c:out value="${pc.getHddSpace()} HDD"/></li>
																	<li><strong>저장장치: </strong><c:out value="${pc.getSsdSpace()} SSD"/></li>
																</c:if>
																<li><strong>그래픽 카드: </strong>${pc.getGraphicKind()}</li>
																<li><strong>용도: </strong>${pc.getPcType()}</li>
															</ul>
														</div>							
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</c:forEach>
							</ul>
						</div>
					</div>	  	
			  	</div>
			</div>
		</div>
		</c:if>
	</div>
</div>
